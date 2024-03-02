import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SubmitCVForm() {
  return (
    <div className="mx-auto max-w-5xl rounded-lg border bg-background p-6 shadow-lg">
      <h1 className="mb-6 text-2xl font-semibold">Upload Your CV</h1>
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="nationality">
            Nationality *
          </label>
          <Select>
            <SelectTrigger id="nationality">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="usa">USA</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="uk">UK</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="idNumber">
            ID Number *
          </label>
          <Input id="idNumber" placeholder="ID Number" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="firstName">
            Preferred First Name *
          </label>
          <Input id="firstName" placeholder="First Name" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="lastName">
            Last Name *
          </label>
          <Input id="lastName" placeholder="Last Name" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="mobileNumber">
            Mobile Number *
          </label>
          <Input id="mobileNumber" placeholder="Mobile Number" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="email">
            Email *
          </label>
          <Input id="email" placeholder="Email" type="email" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="ethnicity">
            Ethnicity *
          </label>
          <Select>
            <SelectTrigger id="ethnicity">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="asian">Asian</SelectItem>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="hispanic">Hispanic</SelectItem>
              <SelectItem value="white">White</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="currentSalary">
            Current Salary *
          </label>
          <Select>
            <SelectTrigger id="currentSalary">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="40k">40k</SelectItem>
              <SelectItem value="60k">60k</SelectItem>
              <SelectItem value="80k">80k</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="font-medium" htmlFor="currentSalaryRate">
            Current Salary Rate *
          </label>
          <Select>
            <SelectTrigger id="currentSalaryRate">
              <SelectValue placeholder="Select an Option" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="annual">Annual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 flex flex-col space-y-2">
          <label className="font-medium" htmlFor="cvUpload">
            Upload CV *
          </label>
          <input
            className="block w-full text-sm text-gray-500
        file:mr-4 file:rounded-full file:border-0
        file:bg-violet-50 file:px-4
        file:py-2 file:text-sm
        file:font-semibold file:text-violet-700
        hover:file:bg-violet-100"
            id="cvUpload"
            type="file"
          />
        </div>
        <div className="col-span-2">
          <Button className="w-full bg-gray-900 text-gray-50 hover:bg-gray-800">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
