


const title = "Course Categories";


const cscContentList = [
    {
        link: '#',
        left: 'Graphic Desin',
        right: '15+',
    },
    {
        link: '#',
        left: 'Digital Marketing',
        right: '6+',
    },
    {
        link: '#',
        left: 'Web Development',
        right: '3+',
    },
    {
        link: '#',
        left: 'Video Editing',
        right: '10+',
    },
    {
        link: '#',
        left: 'Computer Knowledge',
        right: '6+',
    },
    {
        link: '#',
        left: '3D Animation',
        right: '8+',
    },
    {
        link: '#',
        left: 'Freelancing',
        right: '18+',
    },
    {
        link: '#',
        left: 'Content Writing',
        right: '16+',
    },
    // {
    //     link: '#',
    //     left: 'Health & Fitness',
    //     right: '89',
    // },
    // {
    //     link: '#',
    //     left: 'Lifestyle',
    //     right: '37',
    // },
    // {
    //     link: '#',
    //     left: 'Marketing',
    //     right: '18',
    // },
    // {
    //     link: '#',
    //     left: 'Music',
    //     right: '20',
    // },
]


const CourseSideCetagory = () => {
    return (
        <div className="course-side-cetagory">
            <div className="csc-title">
                <h5 className="mb-0">{title}</h5>
            </div>
            <div className="csc-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {cscContentList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left"><a href={val.link}>{val.left}</a></div>
                                <div className="csdc-right">{val.right}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default CourseSideCetagory;