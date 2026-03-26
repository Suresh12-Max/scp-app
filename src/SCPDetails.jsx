function SCPDetails({ scp, onBack }) {

  const isSmallImage =
    scp.image.includes("placeholder");

  return (
    <div className="container py-4">
      <button className="btn btn-secondary mb-4" onClick={onBack}>
        ← Back to Catalogue
      </button>

      <div className="scp-details-page">

        <h1 className="scp-title">Item #: {scp.item}</h1>

        <div className="scp-inline-image-wrapper">
          <img
            src={scp.image}
            alt={scp.item}
            className={`scp-inline-image ${isSmallImage ? "small" : ""}`}
          />
        </div>

        <h2 className="scp-class">
          <strong>Object Class:</strong> {scp.object_class}
        </h2>

        <h3 className="scp-section-title">Special Containment Procedures:</h3>
        <p className="scp-text">{scp.containment}</p>

        <h3 className="scp-section-title">Description:</h3>
        <p className="scp-text">{scp.description}</p>

        <h3 className="scp-section-title">Reference:</h3>
        <p className="scp-text">{scp.reference}</p>

      </div>
    </div>
  )
}

export default SCPDetails