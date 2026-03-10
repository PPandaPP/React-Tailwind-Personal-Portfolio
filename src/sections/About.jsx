
import { Code2, BookOpen, Users, Award } from "lucide-react";
const highlights =[
    {
        icon: Code2,
        title:"Clean Code",
        description:
        "Writing clean, maintainable code that follows best practices and design patterns."
    },
    {
        icon: BookOpen,
        title:"Fast Learning",
        description:
        "Quickly understanding new concepts, tools, and technologies, and efficiently applying new knowledge to solve problems and improve performance."
    },
    {
        icon: Users,
        title:"Team Collaboration",
        description:
        "Working effectively within a team to achieve common goals and share knowledge."
    },
    {
        icon: Award,
        title:"Problem Solving",
        description:
        "Identifying and resolving issues efficiently, using critical thinking and creativity."
    }
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future, 
                            <span className="font-serif italic font-normal text-white">
                                {" "}one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ">
                            <p>
                                Bachelor of Science in Computer Science graduate with a cumulative GPA of 3.98. 
                                Highly committed to continuous professional development, with strong motivation to 
                                consistently expand knowledge specifically in Artificial Intelligence and Machine Learning.
                                Proactive and skilled in programming languages, object-oriented programming, data structures,
                                and effective communication. Trilingual: Spanish, Mandarin, and English. 
                                Recognized with the President’s List distinction for outstanding academic performance at Texas Tech University–Costa Rica.
                            </p>

                            <p>
                                Fast and humble learner with a strong commitment to continuous improvement and skill development. 
                                Strong pattern recognition and problem-solving abilities that enable effective analysis of complex challenges and identification of practical solutions.
                                A collaborative mindset that supports effective teamwork, open communication, and shared success in group environments.
                                Experience and comfort working in culturally diverse settings encourage appreciation for different perspectives that strengthen creativity and collaboration.
                                Curiosity, adaptability, and dedication to learning drive consistent effort to contribute meaningful value to teams and projects.

                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 flex justify-between">
                            <p className="text-xl font-bold italic text-foreground">
                                "Stay hungry, Stay foolish"
                            </p>
                            <br/>
                            <p className="text-lg font-bold italic text-foreground">— Steve Jobs</p>
                        </div>
                    </div>

                    {/* Right Column- Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item,idx)=>(
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" 
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};