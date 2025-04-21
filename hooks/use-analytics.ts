"use client"

import { useCallback } from "react"
import { analytics, AnalyticsEvent } from "@/lib/analytics"

export function useAnalytics() {
  // Track a custom event
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    analytics.trackEvent(event)
  }, [])

  // Track a project view
  const trackProjectView = useCallback((projectId: string, projectTitle: string) => {
    analytics.trackEvent({
      name: "project_view",
      properties: {
        project_id: projectId,
        project_title: projectTitle,
      },
    })
  }, [])

  // Track a skill click
  const trackSkillClick = useCallback((skillName: string) => {
    analytics.trackEvent({
      name: "skill_click",
      properties: {
        skill_name: skillName,
      },
    })
  }, [])

  // Track a contact form submission
  const trackContactSubmit = useCallback(() => {
    analytics.trackEvent({
      name: "contact_submit",
    })
  }, [])

  // Track external link clicks
  const trackExternalLinkClick = useCallback((url: string, linkType: string) => {
    analytics.trackEvent({
      name: "external_link_click",
      properties: {
        url,
        link_type: linkType,
      },
    })
  }, [])

  // Check if analytics is enabled
  const isEnabled = useCallback(() => {
    return analytics.isEnabled()
  }, [])

  // Enable or disable analytics
  const setEnabled = useCallback((enabled: boolean) => {
    analytics.setEnabled(enabled)
  }, [])

  return {
    trackEvent,
    trackProjectView,
    trackSkillClick,
    trackContactSubmit,
    trackExternalLinkClick,
    isEnabled,
    setEnabled,
  }
}
