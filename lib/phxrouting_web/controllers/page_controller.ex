defmodule PhxroutingWeb.PageController do
  use PhxroutingWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def about(conn, _params) do
    render(conn, "about.html")
  end

  def project(conn, _params) do
    render(conn, "project.html")
    
  end
  def sample(conn, _params) do
    render(conn, "sample.html")
    
  end
end
