import type { LucideIcon } from "lucide-react"
import {
  Rocket,
  Lightbulb,
  Target,
  Users,
  PencilRuler,
  Hammer,
  MessageSquareHeart,
  Sparkles,
  PartyPopper,
  Trophy,
  GraduationCap,
  Map,
  Compass,
  Brain,
  Megaphone,
  Mic,
} from "lucide-react"

export type Lesson = {
  number: number
  title: string
  icon: LucideIcon
  goal: string
  skills: string[]
  activity: string
  prompt: string
  homework: string
  milestone: string
}

export const lessons: Lesson[] = [
  {
    number: 1,
    title: "Discover Your Passion + Problems to Solve",
    icon: Lightbulb,
    goal: "Map out the interests, frustrations, and causes you genuinely care about.",
    skills: ["Self-reflection", "Curiosity mapping", "Idea generation"],
    activity: "Build a “Passion Brainstorming Map” connecting things you love to problems worth solving.",
    prompt: "What is something that annoys you that you secretly wish someone would fix?",
    homework: "Talk to 2 people about a problem you noticed, and write down what they say.",
    milestone: "3 possible project ideas",
  },
  {
    number: 2,
    title: "Choosing the Idea",
    icon: Target,
    goal: "Evaluate your ideas on impact, feasibility, and excitement to pick a winner.",
    skills: ["Decision frameworks", "Prioritization", "Critical thinking"],
    activity: "Score each idea 1–5 on Impact, Doable, and Excitement using our idea scorecard.",
    prompt: "If you could only build one of these in 8 weeks, which makes you most excited to wake up for?",
    homework: "Write one sentence describing your chosen project in plain language.",
    milestone: "One clear project concept",
  },
  {
    number: 3,
    title: "Understanding Your Audience",
    icon: Users,
    goal: "Get crystal clear on who you are helping and why it matters to them.",
    skills: ["Empathy", "User research", "Audience definition"],
    activity: "Create a simple user persona, including their name, age, what they want, and what frustrates them.",
    prompt: "Who is the ONE person you most want to help, and what does their day look like?",
    homework: "Interview 1 person who fits your audience. Ask what they struggle with.",
    milestone: "Defined target audience",
  },
  {
    number: 4,
    title: "Designing the Solution",
    icon: PencilRuler,
    goal: "Outline what your project will actually do and how it solves the problem.",
    skills: ["Solution design", "Sketching", "Systems thinking"],
    activity: "Sketch a basic prototype or concept map on paper or a free design tool.",
    prompt: "If your project were a magic button, what would happen the moment someone pressed it?",
    homework: "Refine your sketch into a one-page blueprint of features.",
    milestone: "Project blueprint",
  },
  {
    number: 5,
    title: "Building the First Version",
    icon: Hammer,
    goal: "Create a rough MVP: this could be a website, campaign plan, prototype, or product concept.",
    skills: ["Building / making", "Tool fluency", "Resourcefulness"],
    activity: "Pick one core feature and build it for real using free, no-code tools.",
    prompt: "What is the smallest version of this that a real person could actually use today?",
    homework: "Finish a rough but working first draft of your project.",
    milestone: "First working draft",
  },
  {
    number: 6,
    title: "Testing and Feedback",
    icon: MessageSquareHeart,
    goal: "Put your project in front of real people and learn from their reactions.",
    skills: ["User testing", "Listening", "Iteration mindset"],
    activity: "Interview 3 users or testers and capture what confused or delighted them.",
    prompt: "When someone uses your project, what do you HOPE they say — and what might they actually say?",
    homework: "Write a prioritized list of 3 improvements based on feedback.",
    milestone: "Improvement list",
  },
  {
    number: 7,
    title: "Refining + Preparing the Launch",
    icon: Sparkles,
    goal: "Polish the project and craft a clear message to share with the world.",
    skills: ["Storytelling", "Messaging", "Project management"],
    activity: "Build a simple pitch or launch plan: who, what, where, and the hook.",
    prompt: "In one sentence, how would you tell a friend why your project matters?",
    homework: "Finalize your launch-ready version and write your announcement.",
    milestone: "Launch-ready version",
  },
  {
    number: 8,
    title: "Launch + Showcase",
    icon: PartyPopper,
    goal: "Share your project publicly and celebrate what you built.",
    skills: ["Public speaking", "Confidence", "Reflection"],
    activity: "Go live! Launch the website, run the campaign, or deliver the pitch.",
    prompt: "How will you know your launch was a success — what is your finish line?",
    homework: "Collect reactions and reflect on what you would build next.",
    milestone: "Public launch + showcase",
  },
]

export type Outcome = {
  title: string
  description: string
  icon: LucideIcon
}

export const finalOutcomes: Outcome[] = [
  {
    title: "Launched Website",
    description: "A live site real visitors can use and share.",
    icon: Rocket,
  },
  {
    title: "Working Prototype",
    description: "A tangible product or app concept people can try.",
    icon: Hammer,
  },
  {
    title: "Social Campaign",
    description: "A cause or movement with a real audience.",
    icon: Megaphone,
  },
  {
    title: "Pitch Presentation",
    description: "A confident public pitch of the finished idea.",
    icon: Mic,
  },
]

export type Skill = {
  title: string
  icon: LucideIcon
}

export const keySkills: Skill[] = [
  { title: "Entrepreneurial thinking", icon: Rocket },
  { title: "Creative problem solving", icon: Brain },
  { title: "Communication & storytelling", icon: Megaphone },
  { title: "Project management", icon: Compass },
  { title: "Confidence building real things", icon: Trophy },
]

export const roadmapPhases = [
  { label: "Discover", lessons: "1–2", icon: Lightbulb },
  { label: "Define", lessons: "3–4", icon: Map },
  { label: "Build", lessons: "5–6", icon: Hammer },
  { label: "Launch", lessons: "7–8", icon: Rocket },
]

export const studentProfile = {
  age: "14–16 years old",
  grade: "Middle to high school",
  level: "No prior startup experience",
  personality: "Curious, creative, eager to build something meaningful",
}

export const sessionType = {
  type: "Passion Project (PP)",
  icon: GraduationCap,
}
