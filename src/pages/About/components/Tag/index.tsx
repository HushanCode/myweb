interface TagParams {
  tagTitle: string;
}

const generateTagColors = (baseLightness: number) => {
  // 确保基础明度值在 0 到 100 之间
  const l = Math.min(Math.max(baseLightness, 0), 100);

  // 生成灰色的 HSL 值
  const h = 0; // 灰色的色调不影响结果，设为 0
  const s = 0; // 灰色的饱和度为 0%

  // 生成背景颜色（稍微浅一些）
  const backgroundL = Math.min(l + 10, 100); // 明度增加 10%，确保不超过 100%
  const backgroundColor = `hsl(${h}, ${s}%, ${backgroundL}%)`;

  // 生成边框颜色（稍微深一些）
  const borderL = Math.max(l - 10, 0); // 明度降低 10%，确保不低于 0%
  const borderColor = `hsl(${h}, ${s}%, ${borderL}%)`;

  // 计算字体颜色（比边框颜色稍微深一些）
  const fontL = Math.max(borderL - 10, 0); // 明度进一步降低 10%，确保不低于 0%
  const fontColor = `hsl(${h}, ${s}%, ${fontL}%)`;

  return {
    borderColor,
    backgroundColor,
    fontColor,
  };
};

export const Tag = (props: TagParams) => {
  const { tagTitle } = props;
  const { borderColor, backgroundColor, fontColor } = generateTagColors(90);

  const tagStyle = {
    border: `1px solid ${borderColor}`,
    backgroundColor: backgroundColor,
    color: fontColor,
    padding: "2px 5px",
    borderRadius: "5px",
    display: "inline-block",
  };
  return <span style={tagStyle}>{tagTitle}</span>;
};
