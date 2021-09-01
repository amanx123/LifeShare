import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Life  Share</span>
        <span className="headerTitleLg">Blogs</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3493777/pexels-photo-3493777.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt="header photo"
      />
    </div>
  );
}
