const mapDBToModel = ({ id, title, body, tags, created_at, updated_at }) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  inserted_at,
  updated_at,
});

module.exports = { mapDBToModel };
