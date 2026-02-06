function SectionHeader({ eyebrow, title, subtitle, center }) {
return (
<div className={center ? "text-center mb-5" : "mb-5"}>
{eyebrow && <small className="text-uppercase text-muted">{eyebrow}</small>}
<h2 className="fw-bold mt-2">{title}</h2>
{subtitle && <p className="text-muted mt-2">{subtitle}</p>}
</div>
);
}


export default SectionHeader;