exports.getProjectsQuery = `SELECT * from projects`;
exports.incrementProjectViewsQuery = `UPDATE projects set views = views + 1 where id = $1 RETURNING *`;
exports.incrementProjectLikesQuery = `UPDATE projects set likes = likes + 1 where id = $1 RETURNING *`;