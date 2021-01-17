import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }: { title: string; imageUrl: string; size: number }) => (
  <div className={`${size ? size : ""} menu-item`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
