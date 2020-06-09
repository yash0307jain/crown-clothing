import React from "react";
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";
import CustomButton from "../custom-button/custom-button.component";

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    <CustomButton lessWidth inverted
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      More&#10095;&#10095;
    </CustomButton>
  </div>
);

export default withRouter(CollectionPreview);
