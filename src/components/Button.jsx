import React from "react";

function Button(
  {
    as: Component = "button",
    children,
    variant = "primary",
    size = "sm",
    className = "",
    href = "",
    hover = true,
  },
  ...props
) {
  const variants = {
    primary: "bg-white text-black",
  };

  const sizes = {
    sm: "px-5 py-3 text-sm font-medium",
    md: "px-5 py-3 font-medium",
    lg: "px-6 py-5 text-lg font-medium",
  };

  return (
    <Component
      href={href}
      className={`rounded-lg transition duration-300 ${variants[variant]} ${sizes[size]} ${className} hover:${hover && "opacity-90"} cursor-pointer`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
