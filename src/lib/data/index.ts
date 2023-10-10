

interface mod {
    default: string
}

export const projectsMD = () => {
    const projects = import.meta.glob('./projects/*.md')
    for (const path in projects) {
        projects[path]().then((mod: mod) => {
            console.log(mod.default)
            console.log(matter.read(mod.default))
            //console.log(marked.parse(mod.default))
        })
    }
}
const otherProjects = import.meta.glob('./otherprojects/*.md')