import InputField from "./inputField";

export default function AddCourse({ state, onClose, instructor }) {
    const onSubmit = (event) => {
        event.preventDefault();
        const prof = instructor.name;

        const data = new FormData(event.target);
        const name = data.get("name");
        const slug = data.get("slug");
        const description = data.get("description");
        const video_source = data.get("video_source");
        // prof = data.get("prof");
        const preview_image = data.get("preview_image");
        const duration = data.get("duration");
        const year_level = data.get("year_level");
        const exam_description = data.get("exam_description");
        const exam_link = data.get("exam_link");


        fetch(
            "http://localhost/xampploc/Llames/duck-labs/api/admin/course.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, slug, prof }),
            }
        )
    }
    return (
        state && (
            <div className="flex justify-center items-center  min-h-screen fixed top-0 left-0 w-full  bg-[rgba(0,0,0,0.54)] z-50">
                <div className="bg-white p-8 rounded w-full max-w-lg relative overflow-x-scroll h-full max-h-[90vh]">
                    <button className="absolute top-0 right-0 p-3" onClick={onClose}>
                        <span className="material-icons">close</span>
                    </button>
                    <h1 className="text-2xl font-bold mb-3 capitalize">Add Course</h1>
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-3 mb-4">
                            <InputField label="Name" name="name" type="text" />
                            <InputField label="Slug" name="slug" type="text" />
                            <InputField label="Description" name="description" type="text" />
                            <InputField label="Professor" name="prof" type="text" />
                            <InputField label="Video source" name="video_source" type="file" />
                            <InputField label="Preview image" name="preview_image" type="file" />
                            <InputField label="Duration" name="duration" type="text" />
                            <InputField label="Year-level" name="year_level" type="text" />
                            <InputField label="Exam Description" name="exam-description" type="text" />
                            <InputField label="Exam Link" name="exam-link" type="text" />
                            <InputField label="Exam Result Link" name="exam-result-link" type="text" />
                        </div>
                        <button className="bg-blue-500 rounded px-3 pt-1.5 pb-2 text-white shadow">
                            + Add   
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}
