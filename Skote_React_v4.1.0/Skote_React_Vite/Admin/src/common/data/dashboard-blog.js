// img
import img6 from "../../assets/images/small/img-6.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img1 from "../../assets/images/small/img-1.jpg"

const visitor = {
    onemonth: {
        categories: ["28' Jan", "13' 05' Feb", "13' Mar", "13' Apr", "13' May", "13' Jun", "13' Jul", "13' Aug", "13' Sep", "13' Oct", "13' Nov", "13' Dec"],
        Currentdata: [53, 29, 41, 36, 53, 47, 62, 21, 54, 41, 20, 16],
        Previousdata: [12, 95, 4, 74, 85, 16, 49, 53, 19, 24, 11, 19],
    },
    sixmonth: {
        categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        Currentdata: [51, 32, 40, 28, 31, 26],
        Previousdata: [58, 45, 30, 36, 15, 34],
    },
    year: {
        categories: ["Jan '21", "Feb '21", "Mar '21", "Apr '21", "May '21", "Jun '21", "Jul '21", "Aug '21", "Sep '21", "Oct '21", "Nov '21", "2022"],
        Currentdata: [19, 27, 47, 56, 68, 41, 57, 22, 29, 58, 20, 18],
        Previousdata: [51, 46, 28, 17, 67, 13, 49, 47, 57, 84, 72, 16],
    },
    all: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        Currentdata: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
        Previousdata: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
    }
}

const postRecentData = [
    {
        id: 1,
        img: img2,
        title: "Beautiful Day with Friends",
        date: "10 Nov, 2020"
    },
    {
        id: 2,
        img: img6,
        title: "Drawing a sketch",
        date: "02 Nov, 2020"
    },
    {
        id: 3,
        img: img2,
        title: "Project discussion with team",
        date: "24 Oct, 2020"
    },
    {
        id: 4,
        img: img1,
        title: "Riding bike on road",
        date: "20 Oct, 2020"
    }
]

const postPopularData = [
    {
        id: 1,
        img: img6,
        title: "Drawing a sketch",
        date: "02 Nov, 2020",
        dropdownItems: ["Action", "Another action", "Something else"]
    },
    {
        id: 2,
        img: img2,
        title: "Beautiful Day with Friends",
        date: "10 Nov, 2020",
        dropdownItems: ["Action", "Another action", "Something else"]
    },
    {
        id: 3,
        img: img1,
        title: "Riding bike on road",
        date: "20 Oct, 2020",
        dropdownItems: ["Action", "Another action", "Something else"]
    },
    {
        id: 4,
        img: img2,
        title: "Project discussion with team",
        date: "24 Oct, 2020",
        dropdownItems: ["Action", "Another action", "Something else"]
    }
]

const commentsData = [
    {
        id: 1,
        name: "Delores Williams",
        time: "1 hr Ago",
        content: "If several languages coalesce, the grammar of the resulting of the individual"
    },
    {
        id: 2,
        name: "Clarence Smith",
        time: "2 hrs Ago",
        content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
        replies: [
            {
                id: 3,
                name: "Silvia Martinez",
                time: "2 hrs Ago",
                content: "To take a trivial example, which of us ever undertakes"
            }
        ]
    },
    {
        id: 4,
        name: "Keith McCoy",
        time: "12 Aug",
        content: "Donec posuere vulputate arcu. phasellus accumsan cursus velit"
    }
]
const progressData = [
    { id: 1, color: "primary", label: "California", percentage: 78 },
    { id: 2, color: "warning", label: "Nevada", percentage: 69 },
    { id: 3, color: "success", label: "Texas", percentage: 61 }
];

const activityBlogData = [
    {
        id: 1,
        date: "10 Nov",
        title: "Posted Beautiful Day with Friends blog...",
        link: "#",
        active: true
    },
    {
        id: 2,
        date: "08 Nov",
        title: "If several languages coalesce, the grammar of the resulting...",
        link: "#"
    },
    {
        id: 3,
        date: "02 Nov",
        title: "Create Drawing a sketch blog"
    },
    {
        id: 4,
        date: "24 Oct",
        title: "In enim justo, rhoncus ut, imperdiet a venenatis vitae"
    },
    {
        id: 5,
        date: "21 Oct",
        title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut"
    }
]

export { visitor, postRecentData, postPopularData, commentsData, progressData, activityBlogData };