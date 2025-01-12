"use client";
import { Button, Link } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl"> hello </h1>
      <Button
        as={Link}
        href="/members"
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile />}
      >
        Click me!
      </Button>
    </div>
  );
}
