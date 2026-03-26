function SCPCard({ scp, onSelect }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0 scp-card">
        <img
          src={scp.image}
          className="card-img-top scp-card-img"
          alt={scp.item}
        />

        <div className="card-body d-flex flex-column">
          <span className="badge bg-danger mb-2 align-self-start">
            {scp.object_class}
          </span>

          <h4 className="card-title">{scp.item}</h4>

          <p className="card-text">
            {scp.description.length > 140
              ? scp.description.substring(0, 140) + '...'
              : scp.description}
          </p>

          <button
            className="btn btn-dark mt-auto"
            onClick={() => onSelect(scp)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default SCPCard