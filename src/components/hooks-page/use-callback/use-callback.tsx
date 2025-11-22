import useCallbackImage1 from "./images/use-callback-1.jpg";
import useCallbackImage2 from "./images/use-callback-2.jpg";
import useCallbackImage3 from "./images/use-callback-3.jpg";
import useCallbackImage4 from "./images/use-callback-4.jpg";
import useCallbackImage5 from "./images/use-callback-5.jpg";
import TsxCodeViewer from "../../shared/TsxCodeViewer";
import { useCallbackCode } from "./codes/use-callback-code";
import { memo, useCallback, useState } from "react";
import { Collapse } from "../../shared/Collapse";
import { ImageViewer } from "../../shared/ImageViewer";

const UserInfo = memo(
  ({
    firstName,
    lastName,
    dob,
    formatInfo,
  }: {
    firstName: string;
    lastName: string;
    dob: Date;
    formatInfo: (firstName: string, lastName: string, dob: Date) => string;
  }) => {
    console.log("UserInfo rendered - " + firstName + " " + lastName);
    return (
      <div className="grid grid-cols-3 gap-4 rounded-md bg-red-200 p-4">
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{dob.toISOString().slice(0, 10)}</div>
        <div className="col-span-3">{formatInfo(firstName, lastName, dob)}</div>
      </div>
    );
  }
);

export function Example() {
  const [users, setUsers] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      dob: new Date("1990-01-01"),
    },
  ]);

  const [dateFormat, setDateFormat] = useState<"iso" | "local">("iso");

  const addNewRandomUser = () => {
    setUsers([
      ...users,
      {
        firstName: "John " + Math.ceil(Math.random() * 100),
        lastName: "Doe" + Math.ceil(Math.random() * 100),
        dob: new Date(
          1990,
          Math.ceil(Math.random() * 11),
          Math.ceil(Math.random() * 30)
        ),
      },
    ]);
  };

  const toggleDateFormat = () => {
    setDateFormat(dateFormat === "iso" ? "local" : "iso");
  };

  const formatInfo = useCallback(
    (firstName: string, lastName: string, dob: Date) => {
      if (dateFormat === "iso") {
        return `${firstName} ${lastName} was born on ${dob.toISOString()}`;
      }
      return `${firstName} ${lastName} was born on ${dob.toLocaleDateString()}`;
    },
    [dateFormat]
  );

  return (
    <div>
      <div className="flex gap-4">
        <button
          className="p-2 bg-green-300 rounded-md mb-4"
          onClick={addNewRandomUser}
        >
          Add New User
        </button>
        <button
          className="p-2 bg-green-300 rounded-md mb-4"
          onClick={toggleDateFormat}
        >
          Toggle Date Format [{dateFormat}]
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {users.map((user, index) => (
          <UserInfo
            key={index}
            firstName={user.firstName}
            lastName={user.lastName}
            dob={user.dob}
            formatInfo={formatInfo}
          />
        ))}
      </div>
    </div>
  );
}

export function UseCallback() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h3 className="underline font-bold w-full">Explain:</h3>
      <Collapse>
        <ImageViewer
          images={[
            useCallbackImage1,
            useCallbackImage2,
            useCallbackImage3,
            useCallbackImage4,
            useCallbackImage5,
          ]}
        />
      </Collapse>
      <h3 className="underline font-bold w-full">Example:</h3>
      <Collapse>
        <TsxCodeViewer tsxCode={useCallbackCode} />
        <Example />
      </Collapse>
    </div>
  );
}
