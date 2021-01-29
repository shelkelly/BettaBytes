import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";
import MainContainer from "../components/MainContainer";
import { Col, Row, Container } from "../components/Grid";
import Banner from "../components/Banner";



const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    dispatch({ type: LOADING });
    dispatch({ type: UPDATE_FAVORITES });
  };

  const removeFromFavorites = id => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: id
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <MainContainer id="homecontainer">
            <Banner />
            <Container id="textarea">
      <h1 className="text-center">Favorite Fish</h1>
      {state.favorites.length ? (
        <List>
          <h3 className="mb-5 mt-5">Click on a post to view in detail</h3>
          {state.favorites.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <p>You don't have any favorite fishies yet!</p>
      )}
      <p><img src="https://github.com/shelkelly/BettaBytes/blob/main/client/src/images/Betta-Fish-Vector.jpg?raw=true" id="favfish" alt="A fish in a bag, ready to go home."></img></p>
      <div className="mt-5">
        <Link to="home">Back to home</Link>
      </div>

              </Container>
          </MainContainer>
        </Col>
        <Col size="md-6 sm-12">
          <Container />
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesList;