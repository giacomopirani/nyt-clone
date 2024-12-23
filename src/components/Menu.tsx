import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

type MenuProps = {
  menuOpen: boolean;
  closeMenu: () => void;
};

export default function Menu({ menuOpen, closeMenu }: MenuProps) {
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
    { label: "The Athletic", slug: "the-athletic" },
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="lg:flex items-center justify-center space-y-2 lg:space-y-0 lg:space-x-6 py-4 lg:py-0">
            {menu.map((item) => (
              <motion.li
                key={item.slug}
                className="text-center font-thin pb-1 relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={`/section/${item.slug}`}
                  className="relative"
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
