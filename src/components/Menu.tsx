import { Link } from "react-router-dom";

type MenuProps = { menuOpen: boolean };

export default function Menu(props: MenuProps) {
  const menu: {
    label: string;
    slug: string;
  }[] = [
    { label: "U.S.", slug: "us" },
    { label: "World", slug: "world" },
    { label: "Business", slug: "business" },
    { label: "Arts", slug: "arts" },
    { label: "Lifestyle", slug: "lifestyle" },
    { label: "Opinion", slug: "opinion" },
    { label: "Audio", slug: "audio" },
    { label: "Games", slug: "games" },
    { label: "Cooking", slug: "cooking" },
    { label: "Wirecutter", slug: "wirecutter" },
    { label: "The Atletic", slug: "the atletic" },
  ];

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out mb-6
        ${
          props.menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } lg:max-h-full lg:opacity-100`}
    >
      <ul className="lg:flex items-center justify-center space-y-2 lg:space-y-0 lg:space-x-6 lg:py-0">
        {menu.map((item) => (
          <li
            key={item.slug}
            className="text-center font-thin pb-1 relative group"
          >
            <Link to={`/section/${item.slug}`} className="relative">
              <span>{item.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
