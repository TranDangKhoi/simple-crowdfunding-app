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
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import useOnChange from "hooks/useOnChange";
import DatePicker from "react-date-picker";
import { apiURL } from "components/api/config";
import Swal from "sweetalert2";

const categoriesData = [
  {
    id: 1,
    name: "education",
  },
  {
    id: 2,
    name: "architecture",
  },
];

const CampaignAddNew = () => {
  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useOnChange();
  const [filterCategory, setFilterCategory] = useOnChange();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [categoryList, setCategoryList] = useState(categoriesData);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(addNewCampaignSchema),
  });
  // https://restcountries.com/v3.1/name/peru

  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(res.data);
        console.log(res.data);
        return res.data;
      } catch (err) {
        console.log(err);
        return err;
      }
    }
    fetchCountries();
  }, [filterCountry]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const foundCategories = categoriesData.filter((category) =>
          category.name.includes(filterCategory)
        );
        setCategoryList(foundCategories);
        console.log(foundCategories);
      } catch (err) {
        return err;
      }
    }
    fetchCategories();
  }, [filterCategory]);

  const HandleAddNewCampaign = async (values) => {
    try {
      Swal.fire({
        title: "Are you sure you want to start this campaign?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.post(`${apiURL}/campaigns`, {
            ...values,
            content,
            startDate,
            endDate,
          });
          Swal.fire("Success!", "Your campaign has started.", "success");
        }
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const handleSelectOption = (name, value) => {
    setValue(name, value);
  };
  const getDropdownLabel = (name) => {
    const value = watch(name);
    return value;
  };
  const resetValues = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setContent("");
    reset({});
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
            <Label htmlFor="category"></Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropdownLabel("category")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search for categories..."
                  onChange={setFilterCategory}
                ></Dropdown.Search>
                {categoryList.length > 0 &&
                  categoryList.map((category) => (
                    <Dropdown.Option
                      key={category?.id}
                      onClick={() =>
                        handleSelectOption("category", category?.name)
                      }
                    >
                      <span className="capitalize">{category?.name}</span>
                    </Dropdown.Option>
                  ))}
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
            <RichTextEditor
              content={content}
              setContent={setContent}
              className="border rounded-xl dark:border-darkStroke border-strock"
            ></RichTextEditor>
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

        <FormGroup>
          <Label htmlFor="country">Country</Label>
          <Dropdown>
            <Dropdown.Select
              placeholder={getDropdownLabel("country")}
            ></Dropdown.Select>
            <Dropdown.List>
              <Dropdown.Search
                placeholder="Search for countries..."
                onChange={setFilterCountry}
              ></Dropdown.Search>
              {filterCountry &&
                countries.length > 0 &&
                countries.map((country) => (
                  <Dropdown.Option
                    key={country.name.common}
                    onClick={() =>
                      handleSelectOption("country", country.name.common)
                    }
                  >
                    {country?.name?.common}
                  </Dropdown.Option>
                ))}
            </Dropdown.List>
          </Dropdown>
        </FormGroup>
        <FormRow>
          <FormGroup>
            <Label htmlFor="startDate">Start Date</Label>
            <DatePicker
              value={startDate}
              onChange={setStartDate}
              name="startDate"
            ></DatePicker>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="endDate">End Date</Label>
            <DatePicker
              value={endDate}
              onChange={setEndDate}
              name="endDate"
            ></DatePicker>
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
