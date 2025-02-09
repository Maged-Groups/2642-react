
const GradeCircle = ({ data }) => {
    console.log(data)

    const [grade, bg] = data;

    return <div className={`${bg} text-white w-8 h-8 rounded-full flex items-center justify-center`}>{grade}</div>
}

export default function Grade({ score }) {

    let data = [];

    if (score >= 95) data = ['A+', 'bg-green-800'];
    else if (score >= 90) data = ['A', 'bg-green-600'];
    else if (score >= 85) data = ['A-', 'bg-green-600'];
    else if (score >= 80) data = ['B+', 'bg-green-400'];
    else if (score >= 75) data = ['B', 'bg-sky-800'];
    else if (score >= 70) data = ['B-', 'bg-sky-600'];
    else if (score >= 65) data = ['C+', 'bg-yellow-800'];
    else if (score >= 60) data = ['C', 'bg-yellow-600'];
    else if (score >= 55) data = ['C-', 'bg-pink-600'];
    else if (score >= 50) data = ['D', 'bg-red-800'];
    else data = ['F', 'bg-red-400'];

    return <GradeCircle data={data} />

}
