import Icon from "./Icon";

const iconList = [
  "instagram",
  "x, twitter",
  "linkedin",
  "pinterest",
  "youtube",
  "tiktok",
];

function Footer() {
  return (
    <div>
      <div className="p-8 max-w-300 m-auto flex max-[500px]:flex-col gap-3 justify-between items-center text-white">
        <p className="">@2024 All rights reserved</p>
        <div className="socials flex gap-3">
          {iconList.map((list, i) => (
            <Icon
              key={i}
              icon={list}
              size={18}
              className={`cursor-pointer duration-300 hover:-translate-y-1 text-white/50 hover:text-white`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
