const pool = require('./index.js');
const { getProjectsQuery, incrementProjectViewsQuery, incrementProjectLikesQuery } = require('./queries.js');

const getProjects = async () => {
  const client = await pool.connect();
  try {
    const projects = await client.query(getProjectsQuery);
    if (projects.rows.length > 0) {
      return {
        status: 200,
        projects: projects.rows
      };
    } else {
      return {
        status: 404,
        error: "Projects not found"
      };
    }
  } catch (e) {
    console.log(e);
    return {
      status: 400,
      error: e,
    };
  } finally {
    client.release();
  }
};

const incrementProjectViews = async (project) => {
  const { id } = project;
  const client = await pool.connect();
  try {
    const projects = await client.query(incrementProjectViewsQuery, [id]);
    if (projects.rows.length > 0) {
      return {
        status: 200,
        project: projects.rows[0]
      };
    } else {
      return {
        status: 404,
        error: "Project not found"
      };
    }
  } catch (e) {
    console.log(e);
    return {
      status: 400,
      error: e,
    };
  } finally {
    client.release();
  }
};

const incrementProjectLikes = async (project) => {
  const { id } = project;
  const client = await pool.connect();
  try {
    const projects = await client.query(incrementProjectLikesQuery, [id]);
    if (projects.rows.length > 0) {
      return {
        status: 200,
        project: projects.rows[0]
      };
    } else {
      return {
        status: 404,
        error: "Project not found"
      };
    }
  } catch (e) {
    console.log(e);
    return {
      status: 400,
      error: e,
    };
  } finally {
    client.release();
  }
};

module.exports = {
  getProjects,
  incrementProjectViews,
  incrementProjectLikes,
}