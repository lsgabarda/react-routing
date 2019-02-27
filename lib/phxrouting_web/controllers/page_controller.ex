defmodule PhxroutingWeb.PageController do
  use PhxroutingWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

end
