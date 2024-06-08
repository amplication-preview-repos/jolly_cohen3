import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="stock" source="stock" />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
