"use client"

import React from "react"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function UserButton({ user }) {
	if (!user) {
		return (
			<Link href="/sign-in">
				<Button variant="outline">Sign in</Button>
			</Link>
		)
	}

	return (
		<div className="flex items-center gap-3">
			<Avatar>
				{user.image ? (
					<AvatarImage src={user.image} alt={user.name || user.email || "User"} />
				) : (
					<AvatarFallback>{(user.name || user.email || "U")[0]}</AvatarFallback>
				)}
			</Avatar>
			<div className="text-sm font-medium">
				{user.name ?? user.email}
			</div>
		</div>
	)
}

