package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Order
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-05-27T19:10:55.604Z")

public class Order   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("docType")
  private String docType = null;

  @JsonProperty("docNumber")
  private String docNumber = null;

  @JsonProperty("deliveryDate")
  private String deliveryDate = null;

  @JsonProperty("deliveryAdress")
  private String deliveryAdress = null;

  public Order id(Long id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(required = true, value = "")
  @NotNull


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Order name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(example = "Daimer Ospina", required = true, value = "")
  @NotNull


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Order docType(String docType) {
    this.docType = docType;
    return this;
  }

  /**
   * Get docType
   * @return docType
  **/
  @ApiModelProperty(example = "Cédula", required = true, value = "")
  @NotNull


  public String getDocType() {
    return docType;
  }

  public void setDocType(String docType) {
    this.docType = docType;
  }

  public Order docNumber(String docNumber) {
    this.docNumber = docNumber;
    return this;
  }

  /**
   * Get docNumber
   * @return docNumber
  **/
  @ApiModelProperty(example = "1017142351", required = true, value = "")
  @NotNull


  public String getDocNumber() {
    return docNumber;
  }

  public void setDocNumber(String docNumber) {
    this.docNumber = docNumber;
  }

  public Order deliveryDate(String deliveryDate) {
    this.deliveryDate = deliveryDate;
    return this;
  }

  /**
   * Get deliveryDate
   * @return deliveryDate
  **/
  @ApiModelProperty(example = "30/06/2018", required = true, value = "")
  @NotNull


  public String getDeliveryDate() {
    return deliveryDate;
  }

  public void setDeliveryDate(String deliveryDate) {
    this.deliveryDate = deliveryDate;
  }

  public Order deliveryAdress(String deliveryAdress) {
    this.deliveryAdress = deliveryAdress;
    return this;
  }

  /**
   * Get deliveryAdress
   * @return deliveryAdress
  **/
  @ApiModelProperty(example = "Calle 45 # 56 - 7", required = true, value = "")
  @NotNull


  public String getDeliveryAdress() {
    return deliveryAdress;
  }

  public void setDeliveryAdress(String deliveryAdress) {
    this.deliveryAdress = deliveryAdress;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Order order = (Order) o;
    return Objects.equals(this.id, order.id) &&
        Objects.equals(this.name, order.name) &&
        Objects.equals(this.docType, order.docType) &&
        Objects.equals(this.docNumber, order.docNumber) &&
        Objects.equals(this.deliveryDate, order.deliveryDate) &&
        Objects.equals(this.deliveryAdress, order.deliveryAdress);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, docType, docNumber, deliveryDate, deliveryAdress);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Order {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    docType: ").append(toIndentedString(docType)).append("\n");
    sb.append("    docNumber: ").append(toIndentedString(docNumber)).append("\n");
    sb.append("    deliveryDate: ").append(toIndentedString(deliveryDate)).append("\n");
    sb.append("    deliveryAdress: ").append(toIndentedString(deliveryAdress)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

