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
import { MoneyBagIcon } from "components/icon";

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
    <div className="bg-white dark:bg-darkSecondary shadow-lightShadow rounded-xl py-10 px-[66px]">
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
            <RichTextEditor className="border rounded-xl dark:border-darkStroke border-strock"></RichTextEditor>
          </div>
        </FormGroup>
        <div className="flex items-center justify-start w-full h-24 px-5 mb-8 text-white rounded-lg md:mb-7 bg-secondary gap-x-2">
          <MoneyBagIcon></MoneyBagIcon>
          <span className="text-lg font-semibold text-white">
            You will get 90% of total raised
          </span>
        </div>
        <FormRow>
          <FormGroup>
            <Label>Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Raised amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
              description="I will help fill amount box by click, place each amount by comma (e.g: 10,20,30,40)"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input
              control={control}
              name="video"
              placeholder="Video"
              description="Place Youtube or Vimeo video URL"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="category">Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Blockchain</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Country</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Education</Dropdown.Option>
                <Dropdown.Option>Blockchain</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              control={control}
              name="video"
              placeholder="Start Date"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="startDate">End Date</Label>
            <Input
              control={control}
              name="endDate"
              placeholder="End Date"
            ></Input>
          </FormGroup>
        </FormRow>
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          className="text-sm mt-10 mx-auto w-[255px] h-[52px] text-white bg-primary"
        >
          Submit new campaign
        </Button>
      </form>
    </div>
  );
};

export default CampaignAddNew;
