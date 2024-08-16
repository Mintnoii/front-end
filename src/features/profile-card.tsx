'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";

export default function ProfileCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-80">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="lg"  src="./mintnoii.jpg" />

          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Qing Wang</h4>
            <h5 className="text-small tracking-tight text-default-400">@Mintnoii</h5>
          </div>
        </div>
        {/* <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button> */}
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Front-end Engineer from Shanghai, China.
        </p>
      </CardBody>
      <CardFooter className="gap-3" />
    </Card>
  );
}
