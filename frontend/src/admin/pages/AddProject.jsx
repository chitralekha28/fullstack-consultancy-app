import { useEffect, useState } from "react";
import ImageCropper from "../../components/ImageCropper";
import { getCroppedImg } from "../../utils/cropImage";

const AddProject = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const [projects, setProjects] = useState([]);
  const [message, setMessage] = useState("");

  // image crop states
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [croppedImage, setCroppedImage] = useState("");

  const fetchProjects = () => {
    fetch("fullstack-consultancy-app-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle image select
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setImageSrc(reader.result);
  };

  // crop final image
  const cropDone = async () => {
    const cropped = await getCroppedImg(imageSrc, croppedArea);
    setCroppedImage(cropped);
    setImageSrc(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("fullstack-consultancy-app-production.up.railway.app/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        image: croppedImage, // 👈 cropped image saved
      }),
    });

    if (res.ok) {
      setMessage("Project added successfully");
      setForm({ name: "", description: "" });
      setCroppedImage("");
      fetchProjects();
    }
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    await fetch(`fullstack-consultancy-app-production.up.railway.app/api/projects/${id}`, {
      method: "DELETE",
    });

    fetchProjects();
  };

  return (
    <>
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Project Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <br /><br />

        {/* IMAGE UPLOAD */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <br /><br />

        {/* CROP UI */}
        {imageSrc && (
          <>
            <ImageCropper
              image={imageSrc}
              onCropDone={setCroppedArea}
            />
            <button type="button" onClick={cropDone}>
              Crop Image
            </button>
            <br /><br />
          </>
        )}

        {/* PREVIEW */}
        {croppedImage && (
          <>
            <p>Preview:</p>
            <img
              src={croppedImage}
              alt="Cropped"
              style={{ width: "200px", border: "1px solid #ccc" }}
            />
            <br /><br />
          </>
        )}

        <button>Add Project</button>
      </form>

      {message && <p>{message}</p>}

      <hr />

      <h3>Existing Projects</h3>

      {projects.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <strong>{p.name}</strong>
          <p>{p.description}</p>
          <button onClick={() => deleteProject(p._id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default AddProject;
