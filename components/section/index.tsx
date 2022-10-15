interface ISection {
  title: string;
  description: string;
  content: JSX.Element;
}

export default function Section(props: ISection) {
  const { title, description, content } = props;

  return (
    <section className="h-full text-white bg-swgunmetal text-swbone pl-6 pr-6 pt-6 pb-6 md:pl-32 md:pr-32 md:pt-24 md:pb-24 lg:pl-32 lg:pr-32 lg:pt-24 lg:pb-24">
      <h1 className="text-3xl mb-4">
        {title}
      </h1>
      <p className="text-lg mb-4">
        {description}
      </p>
      <div>
        {content}
      </div>
    </section>
  )
}
