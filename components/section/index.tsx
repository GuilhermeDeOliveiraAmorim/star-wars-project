interface ISection {
    title: string;
    description: string;
    content: JSX.Element;
}

export default function Section(props: ISection) {

    const { title, description, content } = props;

    return (
        <section className="h-full text-white bg-slate-800 p-32">
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
            <div>
                {content}
            </div>
        </section>
    )
}