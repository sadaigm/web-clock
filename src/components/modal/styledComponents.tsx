import styled from "styled-components";
import { device } from "../grid/device";

export const ContainerDiv = styled.div`
  display: flex;
  width: ${(props: CustomStyleProps) => props.width || "100%"};
  height: ${(props: CustomStyleProps) => props.height || "100%"};
  flex-direction: ${(props: CustomStyleProps) => props.compType || "row"};
  border: ${(props: CustomStyleProps) => props.border || "1px solid #f3cdc1"};
  background-color: ${(props: CustomStyleProps) =>
    props.bgColor || "transparent"};
`;

export const SizedBox = styled.div<CustomStyleProps>`
  height: ${(props: CustomStyleProps) => props.height || "100%"};
  width: ${(props: CustomStyleProps) => props.width || "100%"};
`;

export const ModalContainerDiv = styled(ContainerDiv)`
  background-color: rgba(255, 255, 255, 0.9);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  @media ${device.mobileS} {
    width: 85%;
    height: auto;
  }
  @media ${device.tablet} {
    width: 65%;
    height: auto;
  }
  @media ${device.laptop} {
    width: 45%;
  }

  @media ${device.desktop} {
    flex-basis: 30%;
  }
`;

export const CardAction = styled(ContainerDiv)<CustomStyleProps>`
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
  height: 12%;
  padding: 5px;
  font-size: ${(props: CustomStyleProps) =>
    props.fontSize ? `${props.fontSize * 0.6}px` : "15px"};
  border: none;
`;
export const CustomMenu = styled.div`
  height: 200px;
  display: flex;
  overflow-y: auto;
`;
export const CustomMenuList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const CustomMenuListItem = styled.li`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #9e938652;
  cursor: pointer;
  margin: 2px;
`;
export const CustomMenuListItemActive = styled(CustomMenuListItem)`
  background-color: antiquewhite;
  font-weight: bold;
  color: chocolate;
`;
export const SelectedValue = styled.span`
  font-weight: bold;
  color: chocolate;
  font-size: medium;
`;
export const CustomAutoComplete = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid burlywood;
  width: calc(100% - 15px);
`;
export const CustomSelect = styled.select`
  padding: 5px;
  border-radius: 5px;
  background-color: antiquewhite;
  border: 1px solid burlywood;
`;

export type CustomStyleProps = {
  bgColor?: string;
  cellsize?: string;
  height?: string;
  width?: string;
  border?: string;
  compType?: string;
  fontSize?: number;
};
