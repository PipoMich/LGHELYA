"use client";

export default function ScrollLink({ target, children, className, id }) {
  const handleClick = (e) => {
    e.preventDefault();

    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${target}`);
    }
  };

  return (
    <a href={`#${target}`} onClick={handleClick} className={className} id={id}>
      {children}
    </a>
  );
}