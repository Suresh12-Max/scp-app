import { useState } from 'react'
import Navbar from './Navbar.jsx'
import SCPCard from './SCPCard.jsx'
import SCPDetails from './SCPDetails.jsx'
import scpData from './SCPData.json'

function App() {
  const [selectedScp, setSelectedScp] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredScps = scpData.filter((scp) =>
    scp.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scp.object_class.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Navbar />

      {!selectedScp ? (
        <>
          <section className="hero-section text-white d-flex align-items-center">
            <div className="container text-center">
              <h1 className="display-4 fw-bold">Secure. Contain. Protect.</h1>
              <p className="lead">
                SCP Foundation Catalogue - React Single Page Application
              </p>
            </div>
          </section>

          <main className="container py-5">
            <div className="row mb-4">
              <div className="col-md-8 mx-auto">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search by SCP item or object class..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              {filteredScps.length > 0 ? (
                filteredScps.map((scp) => (
                  <SCPCard key={scp.id} scp={scp} onSelect={setSelectedScp} />
                ))
              ) : (
                <div className="text-center py-5">
                  <h4>No SCP records found</h4>
                </div>
              )}
            </div>
          </main>
        </>
      ) : 
      (
        <SCPDetails scp={selectedScp} onBack={() => setSelectedScp(null)} />
      )}

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0"> SCP Catalogue @2026</p>
      </footer>
    </>
  )
}

export default App