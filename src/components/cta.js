import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Join Now"
      description="Become a Beta tester and earn stakeholding tokens."
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
