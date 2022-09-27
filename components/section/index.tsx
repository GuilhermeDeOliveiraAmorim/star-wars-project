interface ISection {
  title: string;
  description: string;
  content: JSX.Element;
}

export default function Section(props: ISection) {
  const { title, description, content } = props;

  return (
    <section className="h-full text-white bg-swgunmetal text-swbone p-4 lg:p-32">
      <h1 className="text-3xl mb-4">{title}</h1>
      <p className="text-lg mb-4">{description}</p>
      <div>{content}</div>
    </section>
  );
}
