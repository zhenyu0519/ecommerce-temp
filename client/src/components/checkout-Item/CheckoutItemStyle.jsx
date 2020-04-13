import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

export const CheckoutImageContainer = styled.div`
  width: 20%;
  padding-right: 15px;
`;

export const CheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutName = styled.span`
  width: 20%;
`;

export const CheckoutQuantity = styled.span`
  width: 20%;
  display: flex;
`;

export const CheckoutArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutValue = styled.span`
  margin: 0 15px;
`;

export const CheckoutPrice = styled.span`
  width: 20%;
`;

export const CheckoutRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

// .checkout-item {
//   width: 100%;
//   display: flex;
//   min-height: 100px;
//   border-bottom: 1px solid darkgrey;
//   padding: 15px 0;
//   font-size: 20px;
//   align-items: center;

//   .image-container {
//     width: 23%;
//     padding-right: 15px;

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .name,
//   .quantity,
//   .price {
//     width: 23%;
//   }

//   .quantity {
//     display: flex;
//     .arrow {
//       cursor: pointer;
//     }
//     .value {
//       margin: 0 10px;
//     }
//   }

//   .remove-button {
//     padding-left: 12px;
//     cursor: pointer;
//   }
// }
