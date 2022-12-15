import { useAuth0, User } from "@auth0/auth0-react";

const HistoryElement = ({ bestelling }) => {
  const { isAuthenticated, user } = useAuth0();
  const str = bestelling.bestellingId;
  const date = bestelling.created_at;
  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <h2>Bestelling op: {date.substring(0, 10)}</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h3>Bestelling id: {str.substring(0, 8)}... </h3>
            </div>
            <div className="col">
              <h3>geplaatst door: {user.name}</h3>
            </div>
            <div className="col">
              <h3>totaal prijs: {bestelling.prijs}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HistoryElement;
