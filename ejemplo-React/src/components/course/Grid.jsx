import Course from "./Course"

function Grid() {
    return (
        <div className="main-content">
            <Course
                title="title_1"
                subtitle="subtitle_1"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/54750fa9-8317-4708-9e71-03779adb1c10.png"
            />
            <Course
                title="title_2"
                subtitle="subtitle_2"
                image="https://edteam-media.s3.amazonaws.com/courses/medium/649bbda8-bd99-445f-a648-184db9bb86d6.png"
            />
        </div>
    )
}

export default Grid