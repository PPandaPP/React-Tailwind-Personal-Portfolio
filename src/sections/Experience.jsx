
const experiences = [
    {
        period: "2026-present",
        role: "Unemployment Final Boss",
        company: "Home",
        Description:
        "Full-time job hunter, half-time gamer",
        technologies: ["Leetcode", "STAR Technique", "Coursera courses", "Rejection Handling", "Strong Mental"],
        current:true, 
    },
    {
        period: "2024-2026",
        role: "Research Assistant",
        company: "Texas Tech University-Costa Rica",
        Description:
        "Actively assisted in the research on Hallucinations on Large Language Models research project.\
        Programmed python script for dataset generation using existing Large Language Models.",
        technologies: ["Python", "Pytorch"],
        current:false, 
    },
    {
        period: "2024-2025",
        role: "Treasurer, Programmer",
        company: "Startup and Tech Lab, Texas Tech University-Costa Rica",
        Description:
        "Assisted in the development of the application TTU@CR Hub, facilitating the advancement of the application.\
        Monitored financial operations of the Startup and Tech Lab. ",
        technologies: ["Next.js", "Node.js", "React", "Typescript", "Prisma"],
        current:false, 
    },
    {
        period: "2023-2024",
        role: "Learning Assistant",
        company: "Texas Tech University-Costa Rica",
        Description:
        "Assisted in the grading process of the courses: CS 1412 Programming Principles, ECE 2372 Modern Digital Systems Design and IE 2311 Computing for Industrial Engineers,  \
        elevating the grading and teaching efficiency by fifty percent. \
        Offered support to students in need, facilitating their learning process. ",
        technologies: ["Python", "C"],
        current:false, 
    },
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
                
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that
                        <span className="font-serif italic font-normal text-white"> 
                            {" "} speaks volumes 
                        </span> <br />
                        <span className="font-serif text-sm italic animate-fade-in animation-delay-800"> (maybe not so much) </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth, from curious beginner to senior beginner and job hunter, handling rejections in the best ways possible.
                    </p>
                </div>
                
                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp,idx) => (
                            <div 
                                key={idx} 
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{animationDelay: `${(idx + 1) * 150}ms`}}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75 "/>}
                                </div>

                                {/* Content, dynamic className checks if idx of experience is odd or even, align right or left depending */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 == 0 ? "md:pr-16 md:text_right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}>
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.Description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 == 0? "md:justify-end": ""}`}>
                                            {exp.technologies.map((tech,techidx)=>(
                                                <span
                                                    key={techidx} 
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}