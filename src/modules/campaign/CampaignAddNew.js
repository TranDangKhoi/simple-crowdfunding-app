import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

import { Button } from "components/button";
import { FormGroup, FormRow, Heading } from "components/common";
import { Dropdown } from "components/dropdown";
import { Input, Textarea } from "components/input";
import { Label } from "components/label";
import { addNewCampaignSchema } from "schemas/yupSchemas";
import RichTextEditor from "components/input/RichTextEditor";

const CampaignAddNew = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(addNewCampaignSchema),
  });

  const HandleAddNewCampaign = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-white shadow-lightShadow rounded-xl py-10 px-[66px]">
      <Heading className="py-4 px-[60] text-center">
        Start a Campaign 🚀
      </Heading>
      <form onSubmit={handleSubmit(HandleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a title for your campaign"
              error={errors.title?.message}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select your category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Blockchain</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor="description">Short Description *</Label>
          <Textarea
            control={control}
            name="description"
            placeholder="Write a short description...."
            error={errors.description?.message}
          ></Textarea>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="story">Story *</Label>
          <div className="mb-10 entry-content">
            <RichTextEditor className="border rounded-xl border-strock"></RichTextEditor>
          </div>
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;
