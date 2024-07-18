import { Tooltip } from "antd";
import { normalIcons } from "./constants";
import style from "./style/index.module.less";
import classNames from "classnames";
import { SOCIAL } from "../../constants";
interface SocialContactProps {
  type: "withBorder" | "noneBorder";
  social: SOCIAL[];
}
const SocialContact = (props: SocialContactProps) => {
  const { type, social } = props;
  console.log("✅ ~ zhuling social:", social);
  if (!social) return null;
  return (
    <>
      <div className={style.container}>
        {social?.map((item, index) => {
          return (
            <>
              <Tooltip title={item.info} placement="top" color={"#282938"}>
                <div
                  onClick={() => {
                    handleLink(item.link);
                  }}
                  className={classNames({
                    [style.socialWithBorder]: type === "withBorder",
                    [style.social]: type === "noneBorder",
                  })}
                  style={{ animationDelay: `.${index}s` }}
                >
                  {normalIcons(item.title)}
                </div>
              </Tooltip>
            </>
          );
        })}
      </div>
    </>
  );
};

export function handleLink(link: string) {
  if (!link) return;
  window.open(link, "_black");
}

export default SocialContact;
