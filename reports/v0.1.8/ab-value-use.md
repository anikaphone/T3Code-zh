# A/B 值用途重名 v0.1.8

A（JSX 文本/子表达式）和 B 原始白名单属性的文字，即使同一文本也出现在「从不转换」的值用途位置（比较、`switch case`、`as const`、字面量类型、对象键），仍照常转换——它们只用于显示。§4 要求把这些位置列出以便人工核对：若上游将来改成拿这些字段做判断，就需要改判定。

共 343 处显示位置（156 条文字）。此清单与 suspicious、可翻译计数分开统计，不计入可翻译位置总数。

### `Retry`（A，message，19 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/MermaidDiagram.tsx:308`（A，DiagramError）；`apps/web/src/components/chat/ThreadFindBar.tsx:101`（A，ThreadFindBar）；`apps/web/src/components/chat/TimelineWorkEntryRow.tsx:266`（A，WorkEntryLogRow）；`apps/web/src/components/chat/useAutoBalanceUpdateBanner.tsx:133`（B，useAutoBalanceUpdateBanner）；`apps/web/src/components/chat/useProjectCloneBanner.tsx:123`（A，useProjectCloneBanner）；`apps/web/src/components/chat/useSystemComposerBanners.tsx:247`（B，useSystemComposerBanners）；`apps/web/src/components/device/DeviceHostUpdates.tsx:58`（A，DeviceHostUpdates）；`apps/web/src/components/device/DevicePanel.tsx:288`（A，DevicePanel）；`apps/web/src/components/device/DevicePanel.tsx:455`（A，DeviceDiscoveryWarning）；`apps/web/src/components/onboarding/FirstRunGate.tsx:216`（A，FirstRunRecovery）；`apps/web/src/components/onboarding/WelcomePage.tsx:778`（A，ProjectsSection）；`apps/web/src/components/onboarding/WelcomePage.tsx:1326`（A，AgentInstallTerminal）；`apps/web/src/components/pullRequest/PullRequestActivityUnavailableState.tsx:30`（A，PullRequestActivityUnavailableState）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:878`（A，renderCodeViewFooter）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1602`（A，PullRequestCodeTab）；`apps/web/src/components/pullRequest/PullRequestsPage.tsx:1211`（A，PullRequestsPage）；`apps/web/src/components/pullRequest/PullRequestsUnavailableState.tsx:41`（A，PullRequestsUnavailableState）；`apps/web/src/components/settings/ConnectionsSettings.tsx:885`（A，renderWslRow）；`apps/web/src/components/sidebar/SidebarUpdateCapsule.tsx:171`（A，SidebarUpdateCapsule）
- 同一文本作为值用途字面量出现 1 次：`packages/source-control-github/src/server/GitHubRequestPolicy.ts:433`（as-const）

### `Done`（A，message，16 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:884`（A，PublishRepositoryDialog）；`apps/web/src/components/GitActionsControl.tsx:1736`（A，GitActionsControl）；`apps/web/src/components/chat/GuestShareControls.tsx:149`（A，GuestShareDialog）；`apps/web/src/components/cloud/ConnectOnboardingDialog.tsx:299`（A，ConfiguredConnectOnboardingDialog）；`apps/web/src/components/device/DeviceSetup.tsx:284`（A，DeviceSetup）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:181`（A，Wizard）；`apps/web/src/components/settings/AuthorizedClientsSettings.tsx:383`（A，PairingLinkListRow）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:321`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BrowserImportWizard.tsx:548`（A，DoneStep）；`apps/web/src/components/settings/CaptureShortcutConfig.tsx:210`（A，CaptureShortcutConfig）；`apps/web/src/components/settings/MicrophoneTest.tsx:339`（B，MicrophonePlayback）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:95`（A，ProviderWizardAuthenticationStep）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1056`（A，WebhookDeliveriesDialog）；`apps/web/src/components/settings/SnapShotSetupDialog.tsx:466`（A，SnapShotSetupDialog）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:491`（A，TextGeneratorWizard）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:746`（A，TextGeneratorModelsDialog）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/threadActivityAnnouncement.ts:10`（as-const）；`packages/source-control-github/src/server/GitHubRequestPolicy.ts:436`（as-const）；`packages/source-control-github/src/server/GitHubRequestPolicy.ts:448`（comparison）

### `Off`（B，message，14 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:311`（B，EffortRows）；`apps/web/src/components/chat/TraitsPicker.tsx:474`（A，TraitsMenuContent）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.tsx:31`（A，MobileClientStatusBadge）；`apps/web/src/components/settings/ConnectionsSettings.tsx:962`（A，renderWslRow）；`apps/web/src/components/settings/LoadBalancingSettings.tsx:68`（B，LoadBalancingSettings）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:641`（A，ProjectOverrideInheritance）；`apps/web/src/components/settings/PullRequestRoutingSettings.tsx:65`（B，PullRequestRoutingSettings）；`apps/web/src/components/settings/SnapShotSettings.tsx:485`（A，SnapShotSettings）；`apps/web/src/components/settings/SnapShotSettings.tsx:502`（A，SnapShotSettings）；`apps/web/src/components/settings/StorageSettings.tsx:164`（A，RetentionControl）；`apps/web/src/components/settings/StorageSettings.tsx:552`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:558`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1340`（A，VoiceSettingsPanel）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1355`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:473`（never-attribute）；`packages/shared/src/otelEnvironment.ts:17`（object-key）；`packages/shared/src/otelEnvironment.ts:369`（object-key）

### `Close`（B，message，9 处）

- 显示位置（照常转换）：`apps/web/src/components/AppRouteModal.tsx:93`（B，AppRouteModalClose）；`apps/web/src/components/chat/HtmlRenderDialog.tsx:30`（B，HtmlRenderDialog）；`apps/web/src/components/files/AttachmentFilePreview.tsx:464`（B，AttachmentFilePreview）；`apps/web/src/components/onboarding/WelcomePage.tsx:1330`（A，AgentInstallTerminal）；`apps/web/src/components/settings/BrowserImportWizard.tsx:576`（A，BlockedStep）；`apps/web/src/components/settings/ProjectFaviconPickerDialog.tsx:87`（B，ProjectFaviconPickerDialog）；`apps/web/src/components/settings/SnapShotSetupDialog.tsx:389`（A，SnapShotSetupDialog）；`apps/web/src/components/ui/dialog.tsx:122`（B，DialogPopup）；`apps/web/src/components/ui/sheet.tsx:116`（B，SheetPopup）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/backend/DesktopBackendPool.ts:101`（ts-type）；`apps/desktop/src/backend/DesktopBackendPool.ts:270`（as-const）

### `Default`（A，message，9 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:212`（A，ColumnRow）；`apps/web/src/components/chat/ComposerModelEffort.tsx:216`（A，ColumnRow）；`apps/web/src/components/chat/ComposerModelEffort.tsx:451`（A，OptionMenuRow）；`apps/web/src/components/chat/TraitsPicker.tsx:109`（A，DefaultBadge）；`apps/web/src/components/settings/AuthorizedClientsSettings.tsx:927`（A，AdvertisedEndpointListRow）；`apps/web/src/components/settings/CustomModelEditor.tsx:166`（A，renderChoice）；`apps/web/src/components/settings/DeviceHostEditor.tsx:178`（B，DeviceHostEditorForm）；`apps/web/src/components/settings/IntegrationsSettings.tsx:1403`（A，BrowserProfilesSetting）；`apps/web/src/components/settings/StorageSettings.tsx:90`（B，WorktreesDirectoryRow）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/device/DeviceControlsRail.tsx:172`（as-const）；`apps/web/src/components/files/officeArchive.ts:557`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:917`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:952`（comparison）

### `Mixed`（B，message，7 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BranchNamingSettings.tsx:105`（B，BranchNamingSettings）；`apps/web/src/components/settings/ProjectDefaultsSettings.tsx:198`（A，ProjectDefaultsSettings）；`apps/web/src/components/settings/ProjectDefaultsSettings.tsx:375`（A，ProjectDefaultsSettings）；`apps/web/src/components/settings/SettingsPanels.tsx:1609`（B，ThreadsSettingsPanel）；`apps/web/src/components/settings/StorageSettings.tsx:90`（B，WorktreesDirectoryRow）；`apps/web/src/components/settings/StorageSettings.tsx:548`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:689`（A，WorktreeCleanupSection）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/usage/UsagePriceOverrides.tsx:202`（comparison）

### `Dismiss`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/browser/ServerBrowserSurface.tsx:878`（A，ServerBrowserSurface）；`apps/web/src/components/chat/GuestShareControls.tsx:309`（A，GuestPendingMessages）；`apps/web/src/components/chat/useThreadLifecycle.tsx:639`（B，useThreadLifecycle）；`apps/web/src/components/desktop/SshPasswordPromptDialog.tsx:212`（A，ActiveSshPasswordPrompt）；`apps/web/src/components/settings/DatabaseStorageNotice.tsx:87`（A，DatabaseStorageNotice）；`apps/web/src/components/sidebar/SidebarUpdateCapsule.tsx:175`（A，SidebarUpdateCapsule）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:323`（object-key）

### `None`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/components/AddProjectToMachineDialog.tsx:353`（A，AddProjectToMachineDialog）；`apps/web/src/components/device/DeviceToolVersions.tsx:69`（A，DeviceToolVersions）；`apps/web/src/components/pullRequest/PullRequestGhosts.tsx:332`（A，PullRequestDetailGhost）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:742`（A，PullRequestSummaryTab）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:817`（A，PullRequestSummaryTab）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1995`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 30 次：`apps/server/src/device/LocalDeviceHost.ts:349`（comparison）；`apps/server/src/guest/http.ts:145`（comparison）；`apps/server/src/guest/http.ts:179`（comparison）；`apps/server/src/guest/http.ts:198`（comparison）；`apps/server/src/process/agentScope.ts:139`（comparison）；`apps/server/src/process/agentScope.ts:149`（comparison）；`apps/server/src/process/agentScope.ts:193`（comparison）；`apps/server/src/process/agentScope.ts:228`（comparison）；`apps/server/src/process/agentScope.ts:337`（comparison）；`apps/server/src/process/agentScope.ts:356`（comparison）；…（共 30 处）

### `Sign in`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/components/HostedEmptyState.tsx:86`（A，T3ConnectSteps）；`apps/web/src/components/cloud/ConnectCliAuthSurface.tsx:83`（A，ConnectCliAuthorizeSurface）；`apps/web/src/components/settings/LabsSettingsPanel.tsx:90`（A，GuestLinksRowWithSignIn）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:306`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:70`（A，ProviderWizardAuthenticationStep）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:566`（A，ConfiguredCloudLinkRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:9`（as-const）

### `Unavailable`（A，message，6 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ModelListRow.tsx:98`（A，ModelListRow）；`apps/web/src/components/chat/ProviderModelPicker.tsx:429`（A，ProviderModelPicker）；`apps/web/src/components/cloud/CloudEnvironmentConnectList.tsx:415`（A，CloudEnvironmentConnectRows）；`apps/web/src/components/files/AudioPreview.tsx:161`（A，AudioChip）；`apps/web/src/components/settings/CodexSetupSection.tsx:1113`（B，CodexManagedRuntimeFields）；`apps/web/src/components/settings/CodexSetupSection.tsx:1132`（B，CodexManagedRuntimeFields）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/chat/ThreadDetailsUsage.tsx:74`（never-attribute）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1203`（never-attribute）；`apps/web/src/components/usage/UsagePriceOverrides.tsx:203`（comparison）

### `Custom`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/StorageSettings.tsx:553`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/StorageSettings.tsx:559`（A，WorktreeCleanupSection）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:384`（A，TextGeneratorWizard）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1580`（A，VoiceSettingsPanel）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1585`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:916`（comparison）

### `Loading`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3635`（A，Sidebar）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:443`（A，InstanceSessionManagement）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:516`（A，InstanceSessionManagement）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:541`（A，InstanceSessionManagement）；`apps/web/src/components/ui/spinner.tsx:31`（B，Spinner）
- 同一文本作为值用途字面量出现 10 次：`apps/desktop/src/preview/Manager.ts:95`（ts-type）；`apps/desktop/src/preview/Manager.ts:1840`（comparison）；`apps/desktop/src/preview/Manager.ts:1884`（comparison）；`apps/server/src/preview/ServerBrowser.ts:1028`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:222`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:115`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:115`（comparison）；`apps/web/src/components/preview/usePreviewBridge.ts:126`（comparison）；`packages/client-runtime/src/state/assets.ts:74`（ts-type）；`packages/contracts/src/ipc.ts:573`（ts-type）

### `seconds`（A，message，5 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BackgroundActivitySettings.tsx:197`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:226`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:254`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/BackgroundActivitySettings.tsx:282`（A，BackgroundActivityAdvancedDialog）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1167`（A，EnvironmentProviderSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/peer/PeerLinks.ts:490`（object-key）

### `Actions`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/ProjectScriptsControl.tsx:374`（A，ProjectScriptsControl）；`apps/web/src/components/ProjectScriptsControl.tsx:415`（A，ProjectScriptsControl）；`apps/web/src/components/settings/ProjectActionsSettings.tsx:111`（B，ProjectActionsSettings）；`apps/web/src/components/settings/ProjectActionsSettings.tsx:116`（B，ProjectActionsSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:316`（object-key）

### `Command`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/projectScriptEditor.tsx:483`（A，ProjectScriptEditorForm）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:362`（A，ProcessDiagnosticsTable）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:591`（A，ProcessResourceHistoryTable）；`apps/web/src/components/settings/KeybindingsSettings.tsx:1132`（B，NewKeybindingCommandSelect）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/lib/embeddedScripts.ts:223`（switch-case）；`apps/web/src/shortcutModifierState.ts:77`（switch-case）

### `Connect`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CodexSetupSection.tsx:737`（A，ManagedCodexSetup）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:305`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/ProviderAuthenticationSection.tsx:430`（A，ProviderAuthenticationSection）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:485`（A，TextGeneratorWizard）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:105`（as-const）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:231`（as-const）；`packages/shared/src/managedPolicyFile.ts:113`（object-key）

### `On`（B，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:311`（B，EffortRows）；`apps/web/src/components/chat/TraitsPicker.tsx:474`（A，TraitsMenuContent）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.tsx:31`（A，MobileClientStatusBadge）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:641`（A，ProjectOverrideInheritance）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:473`（never-attribute）

### `Project`（B，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:648`（B，PullRequestFiltersMenu）；`apps/web/src/components/settings/ProjectSettingsPanel.tsx:515`（B，ProjectDetail）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1688`（B，ScheduledTaskEditorForm）；`apps/web/src/components/settings/StorageSettings.tsx:226`（A，CleanupResults）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/KeybindingsSettings.logic.ts:43`（ts-type）

### `Ready`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceSetup.tsx:403`（A，PlatformStatus）；`apps/web/src/components/onboarding/WelcomePage.tsx:1182`（A，AgentRow）；`apps/web/src/components/settings/CodexSetupSection.tsx:154`（A，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:862`（A，ManagedCodexSetup）
- 同一文本作为值用途字面量出现 11 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:312`（comparison）；`apps/desktop/src/app/DesktopStartupRecovery.ts:341`（comparison）；`apps/desktop/src/app/DesktopState.ts:12`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:259`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:399`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:445`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:621`（comparison）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:655`（comparison）；`apps/server/src/environment/staleWhileRevalidate.ts:14`（ts-type）；`apps/server/src/environment/staleWhileRevalidate.ts:40`（comparison）；…（共 11 处）

### `Settings`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsBreadcrumb.tsx:26`（A，SettingsBreadcrumb）；`apps/web/src/components/settings/SettingsBreadcrumb.tsx:31`（A，SettingsBreadcrumb）；`apps/web/src/components/sidebar/SidebarChrome.tsx:271`（B，SidebarUtilityMenu）；`apps/web/src/routes/_chat.settings.tsx:120`（B，SettingsContentLayout）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/managedPolicyFile.ts:111`（object-key）

### `T3 Code`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/TimelineAssistantRows.tsx:40`（A，AssistantTimelineRow）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:137`（A，UpdateEverythingDialogContent）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:157`（A，UpdateEverythingDialogContent）；`apps/web/src/components/ui/standalone-page.tsx:26`（B，StandalonePageHeader）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/cloud/cliAuthHtml.ts:12`（as-const）

### `t3`（A，message，4 处）

- 显示位置（照常转换）：`apps/web/src/components/InstallT3Commands.tsx:25`（A，InstallT3Commands）；`apps/web/src/components/InstallT3Commands.tsx:26`（A，InstallT3Commands）；`apps/web/src/components/onboarding/WelcomePage.tsx:1869`（A，CliPathSetup）；`apps/web/src/components/onboarding/WelcomePage.tsx:1873`（A，CliPathSetup）
- 同一文本作为值用途字面量出现 12 次：`apps/server/src/cli/invocation.ts:37`（object-key）；`apps/server/src/cli/invocation.ts:55`（comparison）；`apps/server/src/cli/invocation.ts:90`（comparison）；`apps/server/src/provider/ProviderCredentialStore.ts:18`（as-const）；`packages/contracts/src/providerSetup.ts:128`（schema-literal）；`packages/provider-core/src/server/ProviderHost.ts:26`（ts-type）；`packages/provider-core/src/server/auth.ts:13`（ts-type）；`packages/provider-cursor/src/server/auth.ts:462`（as-const）；`packages/provider-testing/src/TestProviderHost.ts:67`（as-const）；`packages/shared/src/otelEnvironment.ts:255`（object-key）；…（共 12 处）

### `App`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/auth/ConnectAgentSurface.tsx:185`（A，ConnectAgentSurface）；`apps/web/src/components/device/DeviceToolsPanel.tsx:129`（B，DeviceToolsPanel）；`apps/web/src/components/settings/SettingsPanels.tsx:2062`（B，AboutSettingsPanel）
- 同一文本作为值用途字面量出现 7 次：`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:29`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:41`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:54`（ts-type）；`apps/desktop/src/electron/WindowsForegroundFocusWorker.ts:73`（object-key）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:39`（ts-type）；`apps/desktop/src/snapShot/SnapShotAccessibilityWorker.ts:9`（object-key）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:105`（as-const）

### `Available`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/cloud/CloudEnvironmentConnectList.tsx:411`（A，CloudEnvironmentConnectRows）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:729`（A，PlatformIcon）；`apps/web/src/components/settings/SourceControlSettings.tsx:205`（A，itemSummary）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:692`（as-const）

### `Branch`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/DiffPanel.tsx:1047`（A，DiffPanel）；`apps/web/src/components/GitActionsControl.tsx:1701`（A，GitActionsControl）；`apps/web/src/components/chat/WorktreeSetupCard.tsx:255`（A，SetupDetails）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/SubagentTooltipContent.tsx:171`（comparison）

### `Codex`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CodexSetupSection.tsx:124`（B，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:191`（B，CodexSetupSection）；`apps/web/src/components/settings/CodexSetupSection.tsx:820`（B，ManagedCodexSetup）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/provider/CodexProvider.ts:85`（as-const）

### `Delete`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/projectScriptEditor.tsx:561`（A，ProjectScriptEditorForm）；`apps/web/src/components/settings/AcpSessionManagementSection.tsx:498`（A，InstanceSessionManagement）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:862`（A，ScheduledTaskRow）
- 同一文本作为值用途字面量出现 10 次：`apps/desktop/src/preview/GuestInput.ts:37`（membership）；`apps/desktop/src/preview/RecordingInput.ts:31`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:60`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:60`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:713`（comparison）；`apps/web/src/components/projectScriptEditor.tsx:311`（comparison）；`apps/web/src/composer-rich-text-doc.ts:462`（object-key）；`apps/web/src/terminal/ghostty/keyCodes.ts:75`（as-const）；`packages/client-runtime/src/device/stream.ts:341`（object-key）；`packages/client-runtime/src/device/stream.ts:388`（object-key）

### `Devices`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:820`（B，DeviceIntegrationSettings）；`apps/web/src/components/settings/LabsSettingsPanel.tsx:214`（A，SimlockHostsRow）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:379`（B，ProviderSettingsPanelContent）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/device/DevicePanel.tsx:267`（never-attribute）

### `Host`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:626`（B，PullRequestFiltersMenu）；`apps/web/src/components/settings/AddEnvironmentDialog.tsx:396`（A，renderRemoteFields）；`apps/web/src/components/settings/SourceControlTokenSettings.tsx:114`（A，SourceControlTokenSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerSurface.tsx:85`（object-key）

### `Process`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:585`（A，ProcessResourceHistoryTable）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:575`（A，ProcessTable）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:679`（A，HistoryProcessTable）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/preview/RecordingInput.ts:20`（membership）；`apps/web/src/browser/ServerBrowserSurface.tsx:678`（comparison）；`apps/web/src/terminal/ghostty/surface.ts:386`（comparison）

### `Settled`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3586`（B，Sidebar）；`apps/web/src/components/Sidebar.tsx:3602`（B，Sidebar）；`apps/web/src/components/chat/useThreadLifecycle.tsx:629`（B，useThreadLifecycle）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/hooks/showThreadUndoNotice.ts:16`（ts-type）

### `T3 Connect`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/clerk/T3ConnectUserProfilePage.tsx:261`（B，T3ConnectUserProfilePage）；`apps/web/src/components/settings/LinkMachineSelect.tsx:23`（A，LinkMachineBadge）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:763`（B，CloudLinkRow）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/cli/up.ts:151`（as-const）

### `Update`（A，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:920`（A，versionActions）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:367`（B，SavedBackendListRow）；`apps/web/src/components/settings/SavedEnvironmentRows.tsx:378`（B，SavedBackendListRow）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:32`（ts-type）；`apps/desktop/src/app/DesktopStartupRecovery.ts:85`（switch-case）；`apps/desktop/src/app/DesktopStartupRecovery.ts:214`（comparison）

### `value`（B，message，3 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CustomModelEditor.tsx:141`（B，renderChoice）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:542`（B，ProviderEnvironmentSection）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:565`（B，ProviderEnvironmentSection）
- 同一文本作为值用途字面量出现 1118 次：`apps/desktop/src/app/DesktopObservability.ts:110`（object-key）；`apps/desktop/src/app/DesktopObservability.ts:246`（object-key）；`apps/desktop/src/app/DesktopObservability.ts:252`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:254`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:276`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:278`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:335`（object-key）；`apps/desktop/src/preview/BrowserImport/BrowserImport.ts:170`（object-key）；`apps/desktop/src/preview/BrowserImport/ChromiumCookies.ts:57`（object-key）；`apps/desktop/src/preview/BrowserImport/ChromiumCookies.ts:73`（object-key）；…（共 1118 处）

### `Active`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3524`（B，Sidebar）；`apps/web/src/components/Sidebar.tsx:3535`（B，Sidebar）
- 同一文本作为值用途字面量出现 7 次：`apps/desktop/src/backend/DesktopBackendPool.ts:82`（ts-type）；`apps/desktop/src/backend/DesktopBackendPool.ts:207`（comparison）；`apps/desktop/src/backend/DesktopBackendPool.ts:305`（comparison）；`apps/desktop/src/backend/DesktopBackendPool.ts:312`（comparison）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1131`（never-attribute）；`packages/client-runtime/src/relay/cloudAccountService.ts:83`（ts-type）；`packages/client-runtime/src/relay/cloudAccountService.ts:170`（comparison）

### `Allowed`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/permissions/PermissionChecklist.tsx:33`（A，PermissionChecklist）；`apps/web/src/components/settings/SessionPermissions.tsx:30`（A，SessionPermissions）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/policy/managedProviders.ts:103`（ts-type）；`apps/server/src/policy/managedSettings.ts:157`（ts-type）

### `Android`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/RightPanelTabs.tsx:1572`（A，DeviceTabTooltip）；`apps/web/src/components/device/DeviceHostAvailability.tsx:16`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/ws.ts:791`（comparison）；`packages/contracts/src/baseSchemas.ts:287`（schema-literal）

### `Backspace`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteContent.tsx:112`（A，CommandPaletteContent）；`apps/web/src/components/projectScriptEditor.tsx:478`（A，ProjectScriptEditorForm）
- 同一文本作为值用途字面量出现 13 次：`apps/desktop/src/preview/GuestInput.ts:33`（membership）；`apps/desktop/src/preview/RecordingInput.ts:30`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:59`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:59`（as-const）；`apps/web/src/browser/ServerBrowserSurface.tsx:713`（comparison）；`apps/web/src/components/CommandPalette.tsx:2605`（comparison）；`apps/web/src/components/chat/ComposerStashMenu.tsx:106`（comparison）；`apps/web/src/components/projectScriptEditor.tsx:311`（comparison）；`apps/web/src/composer-rich-text-doc.ts:399`（object-key）；`apps/web/src/composer-rich-text-doc.ts:461`（object-key）；…（共 13 处）

### `Copy`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/GuestShareControls.tsx:130`（A，GuestShareDialog）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1131`（A，WebhookEndpointField）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/terminal/ghostty/keyCodes.ts:180`（as-const）

### `Failed`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:213`（A，ThreadLineageWorkflowRow）；`apps/web/src/components/settings/DeviceHostEditor.tsx:250`（A，DeviceHostEditorForm）
- 同一文本作为值用途字面量出现 22 次：`apps/desktop/src/backend/DesktopBackendConfiguration.ts:268`（ts-type）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:309`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:321`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:335`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:351`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:386`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:425`（as-const）；`apps/desktop/src/backend/DesktopBackendConfiguration.ts:678`（comparison）；`apps/web/src/components/Sidebar.logic.ts:646`（ts-type）；`apps/web/src/components/chat/threadActivityAnnouncement.ts:11`（as-const）；…（共 22 处）

### `Files`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1723`（A，GitActionsControl）；`apps/web/src/components/diffs/DiffFileTree.tsx:189`（A，DiffFileTree）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/chat/workspaceFileDrop.ts:26`（membership）；`apps/web/src/components/guest/GuestPage.tsx:717`（membership）

### `Local ACP command`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AcpRegistrySearchStep.tsx:196`（A，AcpRegistrySearchStep）；`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:522`（A，AddProviderInstanceDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:247`（as-const）

### `Nightly`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:386`（A，AboutVersionSection）；`apps/web/src/components/settings/SettingsPanels.tsx:414`（A，AboutVersionSection）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/SidebarStageBackdrop.tsx:10`（ts-type）；`packages/contracts/src/ipc.ts:81`（ts-type）；`packages/contracts/src/ipc.ts:96`（schema-literal）

### `Provider`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:603`（A，PublishRepositoryDialog）；`apps/web/src/components/settings/AddProviderInstanceDialog.tsx:477`（A，AddProviderInstanceDialog）
- 同一文本作为值用途字面量出现 4 次：`apps/web/src/components/GitActionsControl.tsx:510`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:8`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:9`（as-const）；`apps/web/src/components/settings/AddProviderInstanceDialog.logic.ts:10`（as-const）

### `Read`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:276`（B，AggregateCard）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:684`（A，HistoryProcessTable）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/electron/LinuxColorScheme.ts:21`（ts-type）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:507`（as-const）

### `Refresh provider status`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1013`（A，EnvironmentProviderSettings）；`apps/web/src/components/settings/ProviderSettingsPanel.tsx:1024`（A，EnvironmentProviderSettings）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ProviderStatusBanner.tsx:109`（non-display-call）

### `Repository`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteAddProject.tsx:159`（A，RemoteRepositorySummary）；`apps/web/src/components/GitActionsControl.tsx:680`（A，PublishRepositoryDialog）
- 同一文本作为值用途字面量出现 5 次：`apps/server/src/project/AgentSessionScanner.ts:878`（ts-type）；`apps/server/src/project/AgentSessionScanner.ts:1582`（comparison）；`apps/web/src/components/GitActionsControl.tsx:510`（as-const）；`packages/source-control-github/src/server/GitHubPullRequestApi.ts:2477`（comparison）；`packages/source-control-github/src/server/pullRequestReads.graphql.ts:1761`（schema-literal）

### `Running`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:219`（A，backgroundWorkNowItem）；`apps/web/src/components/device/DeviceToolVersions.tsx:63`（A，DeviceToolVersions）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/pullRequest/PullRequestReviewGuideService.ts:488`（comparison）；`apps/web/src/components/pullRequest/guide/PullRequestGuideRunCoordinator.tsx:71`（comparison）；`apps/web/src/components/pullRequest/guide/useReviewGuideWriter.ts:34`（comparison）；`apps/web/src/state/pullRequests.ts:410`（comparison）

### `Service`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/TextGeneratorsSettings.tsx:350`（A，TextGeneratorWizard）；`apps/web/src/components/settings/TextGeneratorsSettings.tsx:353`（B，TextGeneratorWizard）
- 同一文本作为值用途字面量出现 853 次：`apps/desktop/src/app/DesktopAssets.ts:78`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:237`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:295`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:372`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:395`（ts-type）；`apps/desktop/src/app/DesktopCliCommand.ts:419`（ts-type）；`apps/desktop/src/app/DesktopCliShim.ts:116`（ts-type）；`apps/desktop/src/app/DesktopConnectionCatalogStore.ts:291`（ts-type）；`apps/desktop/src/app/DesktopEnvironment.ts:145`（ts-type）；`apps/desktop/src/app/DesktopObservability.ts:431`（ts-type）；…（共 853 处）

### `Skipped`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/BrowserImportWizard.tsx:541`（A，DoneStep）；`apps/web/src/components/sidebar/UpdateEverythingDialog.tsx:172`（A，UpdateEverythingDialogContent）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/project/AgentSessionImporter.ts:241`（comparison）；`apps/server/src/project/AgentSessionScanner.ts:202`（ts-type）

### `Snoozed`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/Sidebar.tsx:3569`（B，Sidebar）；`apps/web/src/components/chat/useThreadLifecycle.tsx:619`（B，useThreadLifecycle）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/hooks/showThreadUndoNotice.ts:16`（ts-type）

### `Stop`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:255`（A，backgroundWorkNowItem）；`apps/web/src/components/preview/PreviewChromeRow.tsx:140`（B，PreviewChromeRow）
- 同一文本作为值用途字面量出现 2 次：`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51675`（object-key）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51699`（object-key）

### `Version`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AboutVersionTitle.tsx:28`（A，AboutVersionTitle）；`apps/web/src/components/settings/ConnectionsSettings.tsx:1184`（B，ConnectionsSettingsContent）
- 同一文本作为值用途字面量出现 3 次：`apps/desktop/src/snapShot/LinuxSnapShot.ts:55`（object-key）；`apps/desktop/src/snapShot/LinuxSnapShot.ts:56`（object-key）；`apps/desktop/src/snapShot/NiriSnapShot.ts:45`（object-key）

### `Working`（B，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPalette.tsx:2801`（B，OpenCommandPaletteDialog）；`apps/web/src/components/Sidebar.tsx:3554`（B，Sidebar）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/Sidebar.logic.ts:643`（ts-type）

### `You`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/TimelineUserMessageRow.tsx:853`（A，UserTimelineRow）；`apps/web/src/components/chat/TimelineUserMessageRow.tsx:876`（A，UserTimelineRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/guest/GuestPage.tsx:576`（never-attribute）

### `available`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceHostAvailability.tsx:17`（A，DeviceHostAvailability）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:678`（A，PlatformIcon）
- 同一文本作为值用途字面量出现 135 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:55`（comparison）；`apps/desktop/src/ipc/methods/wsl.ts:31`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:747`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:752`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:754`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1065`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1069`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1075`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1081`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1097`（object-key）；…（共 135 处）

### `comment`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:248`（A，ReviewThreadCard）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:377`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 137 次：`apps/desktop/src/preview/PickPreload.ts:1714`（object-key）；`apps/desktop/src/preview/PickedElementPayload.ts:64`（computed-key）；`apps/server/src/pullRequest/PullRequestService.ts:261`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:297`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:605`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2198`（ts-type）；`apps/server/src/pullRequest/PullRequestService.ts:2202`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:2212`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:2222`（error-constructor）；`apps/server/src/pullRequest/PullRequestService.ts:3829`（object-key）；…（共 137 处）

### `comments`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:248`（A，ReviewThreadCard）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:377`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 92 次：`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:261`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:343`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:374`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1911`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2365`（object-key）；`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:217`（object-key）；`apps/web/src/components/files/officeArchive.ts:493`（membership）；`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1091`（object-key）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:184`（object-key）；`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:222`（object-key）；…（共 92 处）

### `default`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentIconPicker.tsx:82`（A，EnvironmentIconMenu）；`apps/web/src/components/settings/FontFamilyPicker.tsx:162`（A，renderItem）
- 同一文本作为值用途字面量出现 543 次：`apps/desktop/src/ipc/methods/window.ts:184`（comparison）；`apps/desktop/src/snapShot/RegionSnapShotWorker.ts:8`（object-key）；`apps/server/src/device/DeviceActions.ts:88`（object-key）；`apps/server/src/device/DeviceActions.ts:94`（object-key）；`apps/server/src/mcp/McpInvocationContext.ts:71`（object-key）；`apps/server/src/mcp/OrchestratorMcpService.ts:349`（object-key）；`apps/server/src/mcp/threadAccess.ts:154`（comparison）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:3857`（comparison）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:10901`（as-const）；`apps/server/src/orchestration-v2/DispatchModeLimit.ts:31`（object-key）；…（共 543 处）

### `entries`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/VoiceSettingsPanel.tsx:440`（A，ProjectDictionaryRow）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1534`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 248 次：`apps/desktop/src/legacyLocalStorageMerge.ts:45`（object-key）；`apps/server/src/cli/service.ts:73`（object-key）；`apps/server/src/cli/service.ts:107`（object-key）；`apps/server/src/cli/up.ts:66`（object-key）；`apps/server/src/provider/ProviderInstanceRegistry.ts:61`（object-key）；`apps/server/src/provider/ProviderInstanceRegistry.ts:487`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:355`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1350`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1406`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1426`（object-key）；…（共 248 处）

### `entry`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/VoiceSettingsPanel.tsx:440`（A，ProjectDictionaryRow）；`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1534`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 123 次：`apps/desktop/src/app/DesktopCliShim.ts:26`（object-key）；`apps/desktop/src/app/DesktopCliShim.ts:27`（object-key）；`apps/desktop/src/app/DesktopCliShim.ts:132`（object-key）；`apps/desktop/src/app/DesktopCliShim.ts:139`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:257`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:264`（object-key）；`apps/desktop/src/app/chromiumLocalStorage.ts:428`（object-key）；`apps/desktop/src/backend/DesktopBackendPool.ts:101`（object-key）；`apps/desktop/src/backend/DesktopBackendPool.ts:270`（object-key）；`apps/server/src/cli/triage.ts:134`（object-key）；…（共 123 处）

### `file`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:305`（A，ThreadDetailsPrRow）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1148`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 269 次：`apps/desktop/src/app/DesktopCliCommand.ts:273`（object-key）；`apps/desktop/src/permissions/MacPermissionHelper.ts:139`（object-key）；`apps/server/src/assets/AssetAccess.ts:184`（ts-type）；`apps/server/src/assets/AssetAccess.ts:189`（object-key）；`apps/server/src/assets/AssetAccess.ts:1004`（object-key）；`apps/server/src/assets/AttachmentUpload.ts:44`（schema-literal）；`apps/server/src/assets/AttachmentUpload.ts:89`（comparison）；`apps/server/src/assets/AttachmentUpload.ts:93`（comparison）；`apps/server/src/assets/AttachmentUpload.ts:164`（comparison）；`apps/server/src/attachmentStore.ts:159`（switch-case）；…（共 269 处）

### `files`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadDetailsPrRow.tsx:305`（A，ThreadDetailsPrRow）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1148`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 274 次：`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:101`（object-key）；`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:220`（object-key）；`apps/desktop/src/snapShot/CaptureShortcutConfig.ts:235`（object-key）；`apps/server/src/git/GitManager.ts:1132`（object-key）；`apps/server/src/git/GitWorkflowService.ts:145`（object-key）；`apps/server/src/orchestration-v2/CheckpointCaptureService.ts:282`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:215`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:215`（ts-type）；`apps/server/src/orchestration-v2/CheckpointService.ts:229`（object-key）；`apps/server/src/orchestration-v2/CheckpointService.ts:336`（object-key）；…（共 274 处）

### `ghost`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:109`（A，ActorName）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:462`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 11 次：`apps/web/src/components/chat/MessageCopyButton.tsx:28`（ts-type）；`apps/web/src/components/chat/MessageCopyButton.tsx:50`（comparison）；`apps/web/src/components/ui/button.tsx:50`（object-key）；`apps/web/src/components/ui/input-group.tsx:24`（object-key）；`apps/web/src/components/ui/menu.tsx:127`（ts-type）；`apps/web/src/components/ui/menu.tsx:133`（comparison）；`apps/web/src/components/ui/menu.tsx:135`（non-display-call）；`apps/web/src/components/ui/select.tsx:23`（object-key）；`apps/web/src/components/ui/toast.tsx:47`（ts-type）；`apps/web/src/components/ui/toast.tsx:59`（ts-type）；…（共 11 处）

### `iOS`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/RightPanelTabs.tsx:1572`（A，DeviceTabTooltip）；`apps/web/src/components/device/DeviceHostAvailability.tsx:16`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/ws.ts:791`（comparison）；`packages/contracts/src/baseSchemas.ts:286`（schema-literal）

### `on`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2073`（A，ScheduledTaskEditorForm）；`apps/web/src/components/settings/SettingsScopeSentence.tsx:85`（A，SettingsScopeSentence）
- 同一文本作为值用途字面量出现 30 次：`apps/desktop/src/app/DesktopLifecycle.ts:74`（object-key）；`apps/desktop/src/electron/ElectronApp.ts:77`（object-key）；`apps/desktop/src/electron/ElectronApp.ts:252`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:76`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:168`（object-key）；`apps/desktop/src/electron/ElectronUpdater.ts:170`（object-key）；`apps/desktop/src/ipc/DesktopIpc.ts:26`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:132`（ts-type）；`apps/desktop/src/snapShot/snapShot.ts:232`（comparison）；`apps/desktop/src/updates/updatesTestHarness.ts:108`（object-key）；…（共 30 处）

### `opened`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestLinkPreview.tsx:150`（A，PullRequestLinkPreview）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:279`（B，WebhookFiltersField）
- 同一文本作为值用途字面量出现 22 次：`apps/server/src/preview/ServerBrowser.ts:2331`（comparison）；`apps/web/src/components/CommandPaletteThreadItems.tsx:181`（object-key）；`apps/web/src/components/device/DeviceAndroidFoldControls.tsx:101`（comparison）；`apps/web/src/components/device/DeviceAndroidFoldControls.tsx:103`（comparison）；`apps/web/src/components/device/deviceFold.ts:5`（ts-type）；`apps/web/src/components/device/deviceFold.ts:9`（ts-type）；`apps/web/src/components/device/deviceFold.ts:31`（comparison）；`apps/web/src/components/files/office/spreadsheet.worker.ts:32`（object-key）；`apps/web/src/components/files/office/spreadsheet.worker.ts:34`（object-key）；`apps/web/src/components/promptLinks/NewThreadLinkView.tsx:55`（ts-type）；…（共 22 处）

### `replies`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:286`（A，CollapsedComment）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:466`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 8 次：`apps/server/src/guest/GuestShareService.ts:489`（object-key）；`apps/server/src/guest/GuestShareService.ts:494`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:260`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:272`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:485`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:552`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:586`（object-key）；`apps/web/src/components/pullRequest/pullRequestDetail.logic.ts:747`（object-key）

### `reply`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:286`（A，CollapsedComment）；`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:466`（A，ReviewThreadEvent）
- 同一文本作为值用途字面量出现 27 次：`apps/server/src/cli/thread.ts:498`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:253`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:355`（object-key）；`apps/server/src/htmlRender/headlessChrome.ts:405`（object-key）；`apps/server/src/orchestration-v2/ProviderCommitBatch.ts:276`（object-key）；`apps/server/src/orchestration-v2/ProviderCommitBatch.ts:280`（object-key）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:565`（object-key）；`apps/web/src/components/pullRequest/PullRequestSpeedActions.tsx:28`（object-key）；`apps/web/src/components/pullRequest/PullRequestSpeedActions.tsx:65`（object-key）；`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:630`（object-key）；…（共 27 处）

### `updated`（A，message，2 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1532`（A，PullRequestDetailPanel）；`apps/web/src/components/pullRequest/PullRequestGhosts.tsx:217`（A，PullRequestDetailGhost）
- 同一文本作为值用途字面量出现 32 次：`apps/server/src/cli/update.ts:574`（error-constructor）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:40`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:86`（object-key）；`apps/web/src/components/ProviderUpdateLaunchNotification.logic.ts:203`（ts-type）；`apps/web/src/components/ServerUpdateAction.tsx:107`（ts-type）；`apps/web/src/components/chat/V2LifecycleRow.tsx:333`（object-key）；`apps/web/src/components/chat/V2LifecycleRow.tsx:341`（object-key）；`apps/web/src/components/pullRequest/PullRequestDetailLayout.tsx:12`（object-key）；`apps/web/src/components/pullRequest/PullRequestDetailLayout.tsx:21`（object-key）；`apps/web/src/components/pullRequest/pullRequestList.logic.ts:766`（comparison）；…（共 32 处）

### `Access`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/auth/ConnectAgentSurface.tsx:233`（A，ConnectAgentSurface）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:105`（as-const）

### `Add ChatGPT account`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AddCodexAccountDialog.tsx:93`（B，AddCodexAccountDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/AddCodexAccountDialog.tsx:43`（non-display-call）

### `Alt`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:101`（A，KeybindingPill）
- 同一文本作为值用途字面量出现 8 次：`apps/desktop/src/preview/GuestInput.ts:45`（membership）；`apps/desktop/src/preview/RecordingInput.ts:23`（comparison）；`apps/desktop/src/preview/RecordingInput.ts:40`（membership）；`apps/web/src/components/AppSidebarLayout.tsx:223`（membership）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1803`（comparison）；`apps/web/src/components/settings/useSnapShotShortcutRecorder.tsx:23`（object-key）；`apps/web/src/shortcutModifierState.ts:81`（switch-case）；`packages/contracts/src/previewAutomation.ts:394`（schema-literal）

### `Any`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:454`（A，PullRequestLabelFilter）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/project/AgentSessionJson.ts:33`（switch-case）；`packages/source-control-gitlab/src/server/GitLabPullRequestCli.ts:723`（as-const）；`packages/source-control-gitlab/src/server/GitLabPullRequestCli.ts:765`（as-const）

### `Attachment`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/AttachmentFilePreview.tsx:385`（A，AttachmentFilePreview）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:308`（object-key）

### `Beta`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/LabsSettingsPanel.tsx:20`（B，LabsSettingsPanel）
- 同一文本作为值用途字面量出现 2 次：`packages/contracts/src/ipc.ts:81`（ts-type）；`packages/contracts/src/ipc.ts:96`（schema-literal）

### `Body`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:996`（B，WebhookDeliveriesDialog）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:320`（object-key）

### `Checking`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:656`（A，DiagnosticsLastChecked）
- 同一文本作为值用途字面量出现 2 次：`apps/desktop/src/app/DesktopStartupRecovery.ts:31`（ts-type）；`apps/desktop/src/app/DesktopStartupRecovery.ts:83`（switch-case）

### `Coalesce key`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1924`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:137`（as-const）

### `Commit`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1852`（A，GitActionsControl）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/GitActionsControl.tsx:310`（comparison）；`packages/source-control-github/src/server/gitHubPullRequestJson.ts:1181`（comparison）；`packages/source-control-github/src/server/pullRequestReads.graphql.ts:842`（schema-literal）

### `Connected`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DeviceHostEditor.tsx:254`（A，DeviceHostEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:690`（as-const）

### `Connecting`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/TextGeneratorsSettings.tsx:485`（A，TextGeneratorWizard）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/Sidebar.logic.ts:644`（ts-type）

### `Count`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:765`（A，AttributionTable）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/chat/ComposerBanner.tsx:319`（object-key）

### `Desktop`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1077`（B，ResourceTelemetryDiagnosticsBody）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/previewViewport.ts:11`（ts-type）

### `Device hub`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/IntegrationsSettings.tsx:979`（B，DeviceIntegrationControls）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/device/DeviceToolVersions.tsx:54`（as-const）；`packages/client-runtime/src/state/device.ts:100`（as-const）

### `Disabled`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AcpSessionManagementSection.tsx:590`（A，InstanceSessionManagement）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1124`（never-attribute）

### `Duplicate request key`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1907`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:136`（as-const）

### `Enabled`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2118`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1123`（never-attribute）

### `Encoding`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2004`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/persistence/Errors.ts:8`（switch-case）；`packages/effect-acp/src/errors.ts:22`（schema-literal）；`packages/effect-acp/src/errors.ts:81`（switch-case）；`packages/effect-acp/src/errors.ts:116`（switch-case）；`packages/effect-codex-app-server/src/errors.ts:14`（schema-literal）；`packages/effect-codex-app-server/src/errors.ts:44`（switch-case）

### `Enter`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/CommandPaletteContent.tsx:106`（A，CommandPaletteContent）
- 同一文本作为值用途字面量出现 66 次：`apps/desktop/src/preview/AnnotationKeyboard.ts:15`（comparison）；`apps/desktop/src/preview/GuestInput.ts:35`（membership）；`apps/desktop/src/preview/RecordingInput.ts:28`（object-key）；`apps/web/src/browser/ServerBrowserSurface.tsx:697`（comparison）；`apps/web/src/components/BranchPicker.tsx:113`（comparison）；`apps/web/src/components/CommandPalette.tsx:2500`（comparison）；`apps/web/src/components/CommandPalette.tsx:2569`（comparison）；`apps/web/src/components/CommandPalette.tsx:2577`（comparison）；`apps/web/src/components/CommandPalette.tsx:2592`（comparison）；`apps/web/src/components/CommandPalette.tsx:2655`（comparison）；…（共 66 处）

### `Environment disconnected`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:710`（B，ScheduledTaskEnvironmentSection）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/IntegrationsSettings.tsx:869`（error-constructor）；`apps/web/src/components/settings/deviceHostConnectionChecks.ts:48`（error-constructor）

### `Fast`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerModelEffort.tsx:587`（B，SpeedControl）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/chat/ComposerModelEffort.tsx:132`（comparison）；`apps/web/src/components/chat/ComposerModelEffort.tsx:544`（comparison）；`apps/web/src/components/chat/TraitsSpeed.tsx:21`（comparison）；`apps/web/src/components/settings/ProviderModelsSection.tsx:51`（comparison）；`packages/client-runtime/src/modelTraits.ts:140`（comparison）

### `Filter`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestSummaryTab.tsx:947`（A，PullRequestSummaryTab）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/persistence/Errors.ts:7`（switch-case）；`packages/effect-acp/src/errors.ts:21`（schema-literal）；`packages/effect-acp/src/errors.ts:80`（switch-case）；`packages/effect-acp/src/errors.ts:115`（switch-case）；`packages/effect-codex-app-server/src/errors.ts:13`（schema-literal）；`packages/effect-codex-app-server/src/errors.ts:43`（switch-case）

### `Foreground`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceToolsPanel.tsx:130`（B，DeviceToolsPanel）
- 同一文本作为值用途字面量出现 1 次：`packages/tailscale/src/tailscale.ts:521`（object-key）

### `Home`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceControlsRail.tsx:66`（B，DeviceControlsRail）
- 同一文本作为值用途字面量出现 21 次：`apps/desktop/src/preview/GuestInput.ts:39`（membership）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1108`（comparison）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:1127`（comparison）；`apps/web/src/components/chat/TimelineMinimap.tsx:181`（comparison）；`apps/web/src/components/chat/timelineViewport.ts:63`（membership）；`apps/web/src/components/chat/useAssistantCitationTarget.ts:10`（membership）；`apps/web/src/components/files/FileExplorerPane.tsx:96`（switch-case）；`apps/web/src/components/files/VirtualTablePreview.tsx:454`（comparison）；`apps/web/src/components/files/VirtualTablePreview.tsx:458`（comparison）；`apps/web/src/components/files/office/Spreadsheet.tsx:125`（comparison）；…（共 21 处）

### `Icon`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentIconPicker.tsx:55`（A，EnvironmentIconMenu）
- 同一文本作为值用途字面量出现 123 次：`apps/web/src/components/ChatMarkdown.tsx:342`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:346`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:352`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:358`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:364`（object-key）；`apps/web/src/components/ChatMarkdown.tsx:370`（object-key）；`apps/web/src/components/GitActionsControl.tsx:177`（object-key）；`apps/web/src/components/GitActionsControl.tsx:285`（ts-type）；`apps/web/src/components/GitActionsControl.tsx:299`（ts-type）；`apps/web/src/components/GitActionsControl.tsx:728`（object-key）；…（共 123 处）

### `Idle`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1128`（B，ResourceTelemetryDiagnosticsBody）
- 同一文本作为值用途字面量出现 24 次：`apps/desktop/src/preview/Manager.ts:94`（ts-type）；`apps/desktop/src/preview/Manager.ts:1236`（comparison）；`apps/desktop/src/preview/Manager.ts:1940`（comparison）；`apps/web/src/browser/ElectronBrowserHost.tsx:138`（comparison）；`apps/web/src/components/RightPanelTabs.tsx:599`（comparison）；`apps/web/src/components/RightPanelTabs.tsx:636`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:220`（as-const）；`apps/web/src/components/preview/PreviewView.tsx:221`（comparison）；`apps/web/src/components/preview/PreviewView.tsx:225`（comparison）；`apps/web/src/components/preview/openPreviewSession.ts:59`（comparison）；…（共 24 处）

### `Interrupt`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerPrimaryActions.tsx:148`（A，renderStopGenerationButton）
- 同一文本作为值用途字面量出现 4 次：`packages/effect-acp/src/protocol.ts:326`（comparison）；`packages/effect-acp/src/protocol.ts:759`（switch-case）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51667`（object-key）；`packages/effect-codex-app-server/src/_generated/schema.gen.ts:51683`（object-key）

### `J`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/guide/GuideStop.tsx:123`（A，GuideStop）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/terminalOutput.ts:477`（switch-case）

### `K`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/guide/GuideStop.tsx:124`（A，GuideStop）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/terminalOutput.ts:474`（switch-case）

### `New thread`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/sidebar/SidebarThreadHeader.tsx:109`（B，SidebarThreadHeader）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/orchestration-v2/ThreadTitleRegenerationService.ts:180`（comparison）

### `Not available`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:729`（A，PlatformIcon）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/settings/DeviceSourcesSettings.tsx:693`（as-const）；`apps/web/src/components/settings/DeviceSourcesSettings.tsx:703`（comparison）

### `Organization`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:2065`（B，AboutSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/server/src/policy/policyTemplates.ts:199`（comparison）；`packages/shared/src/managedPolicyFile.ts:109`（object-key）；`packages/source-control-github/src/server/pullRequestReviews.graphql.ts:24`（schema-literal）

### `Path`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/WorktreeSetupCard.tsx:271`（A，SetupDetails）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/cli/update.ts:228`（computed-key）；`apps/server/src/cloud/pinnedRuntime.ts:480`（computed-key）；`apps/server/src/process/externalLauncher.ts:111`（object-key）；`packages/provider-core/src/server/maintenanceResolver.ts:59`（object-key）

### `Phone`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomePage.tsx:912`（B，PhoneSection）
- 同一文本作为值用途字面量出现 11 次：`packages/shared/src/previewViewport.ts:11`（ts-type）；`packages/shared/src/previewViewport.ts:23`（as-const）；`packages/shared/src/previewViewport.ts:30`（as-const）；`packages/shared/src/previewViewport.ts:37`（as-const）；`packages/shared/src/previewViewport.ts:44`（as-const）；`packages/shared/src/previewViewport.ts:51`（as-const）；`packages/shared/src/previewViewport.ts:58`（as-const）；`packages/shared/src/previewViewport.ts:65`（as-const）；`packages/shared/src/previewViewport.ts:100`（as-const）；`packages/shared/src/previewViewport.ts:107`（as-const）；…（共 11 处）

### `Prompt`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:1773`（B，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 1 次：`apps/server/src/provider/acp/AntigravityChildWork.ts:49`（object-key）

### `Remove route`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/EnvironmentRoutesList.tsx:204`（A，SortableRouteRow）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/settings/EnvironmentRoutesList.tsx:63`（non-display-call）

### `Skill`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ComposerCommandMenu.tsx:316`（A，SkillSourceBadge）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/toolActivity.ts:21`（comparison）

### `Span`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:1244`（A，DiagnosticsSettingsBody）
- 同一文本作为值用途字面量出现 3 次：`packages/shared/src/nodeSqliteClient.ts:68`（comparison）；`packages/shared/src/nodeSqliteClient.ts:72`（comparison）；`packages/shared/src/nodeSqliteClient.ts:84`（comparison）

### `This connection cannot read host files.`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/FilePreviewPanel.tsx:1255`（A，FilePreviewPanel）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/media/MediaActions.tsx:72`（error-constructor）

### `Type`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/DiagnosticsSettings.tsx:364`（A，ProcessDiagnosticsTable）
- 同一文本作为值用途字面量出现 29 次：`apps/server/src/cli/thread.ts:186`（ts-type）；`apps/server/src/peer/PeerMcpClient.ts:45`（ts-type）；`apps/server/src/textGeneration/ClaudeTextGeneration.ts:147`（ts-type）；`apps/server/src/textGeneration/CodexTextGeneration.ts:226`（ts-type）；`apps/web/src/components/settings/SecretProviderDialog.logic.ts:67`（ts-type）；`packages/contracts/src/baseSchemas.ts:125`（ts-type）；`packages/contracts/src/baseSchemas.ts:126`（ts-type）；`packages/contracts/src/baseSchemas.ts:134`（ts-type）；`packages/contracts/src/baseSchemas.ts:182`（ts-type）；`packages/contracts/src/baseSchemas.ts:215`（ts-type）；…（共 29 处）

### `Unknown`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceToolsPanel.tsx:389`（A，ChoiceSelect）
- 同一文本作为值用途字面量出现 7 次：`apps/server/src/assets/AttachmentUpload.ts:216`（error-constructor）；`apps/server/src/project/AgentSessionJson.ts:32`（switch-case）；`apps/server/src/provider/AntigravityInstallation.ts:402`（comparison）；`apps/server/src/provider/Drivers/CodexHomeLayout.ts:155`（comparison）；`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:1057`（never-attribute）；`packages/contracts/src/resourceTelemetry.ts:239`（schema-literal）；`packages/shared/src/symlink.ts:43`（error-constructor）

### `Updates`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:1955`（B，MaintenanceSettingsPanel）
- 同一文本作为值用途字面量出现 1 次：`packages/shared/src/managedPolicyFile.ts:134`（object-key）

### `Waiting`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadActivityBanners.tsx:219`（A，backgroundWorkNowItem）
- 同一文本作为值用途字面量出现 1 次：`apps/web/src/components/Sidebar.logic.ts:650`（ts-type）

### `Worktree`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/PullRequestThreadDialog.tsx:307`（A，PullRequestThreadDialog）
- 同一文本作为值用途字面量出现 2 次：`apps/server/src/project/AgentSessionScanner.ts:879`（ts-type）；`apps/server/src/project/AgentSessionScanner.ts:1578`（comparison）

### `agent`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:217`（A，ThreadLineageWorkflowRow）
- 同一文本作为值用途字面量出现 190 次：`apps/desktop/src/preview/Manager.ts:116`（ts-type）；`apps/desktop/src/preview/PickPreload.ts:81`（comparison）；`apps/desktop/src/preview/PickPreload.ts:101`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:65`（ts-type）；`apps/desktop/src/preview/RecordingCursor.ts:80`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:149`（comparison）；`apps/server/src/cli/triage.ts:35`（object-key）；`apps/server/src/cli/triage.ts:105`（schema-literal）；`apps/server/src/cli/triage.ts:117`（object-key）；`apps/server/src/cli/triage.ts:154`（object-key）；…（共 190 处）

### `agents`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/ThreadLineageWorkflowRow.tsx:217`（A，ThreadLineageWorkflowRow）
- 同一文本作为值用途字面量出现 21 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:6312`（object-key）；`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:6713`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:100`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:115`（object-key）；`apps/server/src/orchestration-v2/Adapters/claudeWorkflowProgress.ts:176`（object-key）；`apps/web/src/rightPanelStore.ts:492`（comparison）；`apps/web/src/rightPanelStore.ts:582`（comparison）；`packages/client-runtime/src/state/subagentRuntime.ts:411`（object-key）；`packages/client-runtime/src/state/subagentRuntime.ts:448`（object-key）；`packages/contracts/src/acpRegistry.ts:78`（object-key）；…（共 21 处）

### `and`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:505`（A，WhenExpressionNodeEditor）
- 同一文本作为值用途字面量出现 14 次：`apps/server/src/keybindings.ts:164`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:99`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:327`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.tsx:146`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:482`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:505`（never-attribute）；`apps/web/src/keybindings.ts:82`（switch-case）；`packages/client-runtime/src/work-log/commandLabel.ts:73`（membership）；`packages/client-runtime/src/work-log/commandLabel.ts:161`（membership）；`packages/contracts/src/keybindings.ts:184`（schema-literal）；…（共 14 处）

### `approval`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1670`（A，PullRequestDetailPanel）
- 同一文本作为值用途字面量出现 45 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:4583`（ts-type）；`apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts:1334`（ts-type）；`apps/web/src/components/RightPanelTabs.tsx:701`（comparison）；`apps/web/src/components/Sidebar.logic.ts:817`（ts-type）；`apps/web/src/components/Sidebar.logic.ts:845`（comparison）；`apps/web/src/components/Sidebar.logic.ts:862`（comparison）；`apps/web/src/components/Sidebar.logic.ts:903`（membership）；`apps/web/src/components/Sidebar.logic.ts:970`（ts-type）；`apps/web/src/components/Sidebar.logic.ts:1096`（comparison）；`apps/web/src/components/ThreadNotificationCoordinator.tsx:134`（comparison）；…（共 45 处）

### `approvals`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestDetailPanel.tsx:1670`（A，PullRequestDetailPanel）
- 同一文本作为值用途字面量出现 13 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:443`（object-key）；`apps/server/src/orchestration-v2/Adapters/CodexAdapterV2.ts:287`（object-key）；`apps/web/src/components/chat/usePendingThreadRequests.ts:62`（object-key）；`apps/web/src/components/clerk/MobileClientsUserProfilePage.logic.ts:9`（as-const）；`packages/client-runtime/src/state/threadRequests.ts:92`（object-key）；`packages/client-runtime/src/state/threadRequests.ts:281`（object-key）；`packages/contracts/src/orchestrationV2.ts:387`（object-key）；`packages/provider-acp/src/server/adapter.ts:699`（object-key）；`packages/provider-cursor/src/server/adapter.ts:119`（object-key）；`packages/provider-muse/src/server/adapter.ts:148`（object-key）；…（共 13 处）

### `as`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SourceControlSettings.tsx:171`（A，itemSummary）
- 同一文本作为值用途字面量出现 2 次：`apps/web/src/components/chat/MarkdownCodeBlock.tsx:45`（object-key）；`apps/web/src/components/chat/MarkdownCodeBlock.tsx:55`（object-key）

### `at`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SnoozePresetsSettings.tsx:377`（A，SnoozePresetFields）
- 同一文本作为值用途字面量出现 92 次：`apps/server/src/device/SimlockDeviceHost.ts:206`（object-key）；`apps/server/src/device/SimlockDeviceHost.ts:340`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:85`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:549`（object-key）；`apps/server/src/orchestration-v2/assistantStreaming.ts:72`（object-key）；`apps/server/src/orchestration-v2/assistantStreaming.ts:101`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1130`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1151`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2774`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2783`（object-key）；…（共 92 处）

### `author`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:380`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 145 次：`apps/server/src/orchestration-v2/PullRequestSyncReactor.ts:210`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:38`（ts-type）；`apps/server/src/pullRequest/PullRequestService.ts:1257`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1711`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1819`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1870`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:1909`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2959`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:3226`（object-key）；`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1004`（object-key）；…（共 145 处）

### `authors`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestTimelineTab.tsx:380`（A，ConversationGroup）
- 同一文本作为值用途字面量出现 26 次：`apps/server/src/pullRequest/PullRequestService.ts:2596`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2608`（object-key）；`apps/server/src/pullRequest/PullRequestService.ts:2618`（object-key）；`apps/web/src/components/pullRequest/PullRequestListFilters.tsx:269`（object-key）；`apps/web/src/components/pullRequest/pullRequestList.logic.ts:114`（object-key）；`apps/web/src/state/pullRequests.ts:649`（object-key）；`packages/contracts/src/acpRegistry.ts:67`（object-key）；`packages/contracts/src/pullRequest.ts:227`（object-key）；`packages/contracts/src/pullRequest.ts:545`（schema-literal）；`packages/contracts/src/pullRequest.ts:572`（object-key）；…（共 26 处）

### `auto-settle`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/SettingsPanels.tsx:1725`（B，ThreadsSettingsPanel）
- 同一文本作为值用途字面量出现 3 次：`apps/web/src/components/settings/SettingsPanels.tsx:1685`（never-attribute）；`apps/web/src/components/threadActionMenu.logic.ts:14`（ts-type）；`apps/web/src/components/threadActionMenu.logic.ts:208`（as-const）

### `base64`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2019`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 16 次：`apps/desktop/src/preview/FaviconCapture.ts:219`（comparison）；`apps/desktop/src/preview/FaviconCapture.ts:220`（membership）；`apps/desktop/src/preview/FaviconCapture.ts:227`（comparison）；`apps/server/src/htmlRender/HtmlRender.ts:335`（as-const）；`apps/server/src/imageMime.ts:51`（object-key）；`apps/server/src/imageMime.ts:71`（comparison）；`apps/server/src/imageMime.ts:107`（object-key）；`apps/server/src/orchestration-v2/toolOutputImageBytes.ts:9`（membership）；`apps/server/src/orchestration-v2/toolOutputImageBytes.ts:28`（comparison）；`apps/web/src/components/media/mediaContent.ts:32`（comparison）；…（共 16 处）

### `chain`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/ThreadStatusIndicators.tsx:355`（A，ThreadPullRequestsMiniList）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/ComposerPromptEditorTiptap.tsx:579`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:601`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:639`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:653`（object-key）；`apps/web/src/components/ComposerPromptEditorTiptap.tsx:680`（object-key）

### `cost`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/usage/UsagePage.tsx:766`（A，UsageOverview）
- 同一文本作为值用途字面量出现 30 次：`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:38`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:315`（object-key）；`apps/server/src/textGeneration/OpenCode2TextGeneration.fixture.ts:335`（object-key）；`apps/web/src/components/files/office/document.worker.ts:189`（object-key）；`apps/web/src/components/usage/UsagePage.tsx:605`（ts-type）；`apps/web/src/components/usage/UsagePage.tsx:667`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:674`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:676`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:703`（comparison）；`apps/web/src/components/usage/UsagePage.tsx:743`（comparison）；…（共 30 处）

### `custom`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProviderModelsSection.tsx:533`（A，ProviderModelRow）
- 同一文本作为值用途字面量出现 100 次：`apps/server/src/git/GitManager.ts:830`（switch-case）；`apps/server/src/orchestration-v2/ThreadLaunchService.ts:368`（comparison）；`apps/server/src/speech/postProcessing.ts:37`（comparison）；`apps/web/src/components/settings/BranchNamingSettings.tsx:19`（object-key）；`apps/web/src/components/settings/BranchNamingSettings.tsx:117`（comparison）；`apps/web/src/components/settings/IntegrationsSettings.tsx:703`（object-key）；`apps/web/src/components/settings/IntegrationsSettings.tsx:752`（comparison）；`apps/web/src/components/settings/SettingInheritance.tsx:37`（object-key）；`apps/web/src/components/settings/SettingInheritance.tsx:44`（object-key）；`apps/web/src/components/settings/SettingsPanels.logic.ts:190`（comparison）；…（共 100 处）

### `days`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/StorageSettings.tsx:158`（A，RetentionControl）
- 同一文本作为值用途字面量出现 32 次：`apps/server/src/auth/EnvironmentAuth.ts:870`（object-key）；`apps/server/src/scheduledTasks/Schedule.ts:35`（object-key）；`apps/server/src/storageCleanup.ts:1337`（object-key）；`apps/server/src/storageCleanup.ts:1343`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:77`（ts-type）；`apps/web/src/components/CustomSnoozeDialog.tsx:202`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:204`（comparison）；`apps/web/src/components/CustomSnoozeDialog.tsx:215`（never-attribute）；`apps/web/src/components/settings/SnoozePresetsSettings.tsx:39`（object-key）；`apps/web/src/components/settings/SnoozePresetsSettings.tsx:44`（object-key）；…（共 32 处）

### `folder`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomePage.tsx:1671`（A，ImportCandidateList）
- 同一文本作为值用途字面量出现 16 次：`apps/server/src/project/ManagedProjectFolders.ts:40`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:66`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:251`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:338`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:340`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:353`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:369`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:373`（object-key）；`apps/server/src/project/ManagedProjectFolders.ts:429`（object-key）；`apps/web/src/components/sidebar/SidebarThreadRow.tsx:540`（ts-type）；…（共 16 处）

### `folders`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/onboarding/WelcomePage.tsx:1671`（A，ImportCandidateList）
- 同一文本作为值用途字面量出现 5 次：`apps/web/src/components/chat/ChatComposer.tsx:2627`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:37`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:40`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:54`（object-key）；`apps/web/src/components/chat/workspaceFileDrop.ts:81`（object-key）

### `from`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/TelemetryExportSettings.tsx:240`（A，TelemetryExportForm）
- 同一文本作为值用途字面量出现 78 次：`apps/server/src/checkpointing/CheckpointDiffQuery.ts:201`（error-constructor）；`apps/server/src/checkpointing/Errors.ts:72`（schema-literal）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:130`（object-key）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:130`（object-key）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:382`（object-key）；`apps/server/src/orchestration-v2/ContextHandoffService.ts:398`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:2141`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:5436`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:7351`（object-key）；`apps/server/src/orchestration-v2/ProviderTurnStartService.ts:1057`（object-key）；…（共 78 处）

### `hex`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2018`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 11 次：`apps/server/src/preview/PreviewBrowser.ts:231`（comparison）；`apps/server/src/provider/AntigravityInstallation.ts:603`（comparison）；`apps/server/src/provider/CodexInstallation.ts:559`（comparison）；`apps/server/src/scheduledTasks/webhookVerification.ts:38`（comparison）；`apps/server/src/speech/SpeechModelStore.ts:103`（comparison）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2018`（never-attribute）；`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:89`（ts-type）；`apps/web/src/components/settings/scheduledTasksSettings.logic.ts:104`（as-const）；`packages/contracts/src/scheduledTask.ts:80`（schema-literal）；`packages/shared/src/paletteSearch.ts:555`（object-key）；…（共 11 处）

### `in`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/chat/DraftHeroProjectHeading.tsx:52`（A，DraftHeroProjectHeading）
- 同一文本作为值用途字面量出现 18 次：`apps/desktop/src/preview/Manager.ts:365`（ts-type）；`apps/desktop/src/preview/Manager.ts:367`（comparison）；`apps/desktop/src/window/DesktopWindow.ts:100`（ts-type）；`apps/desktop/src/window/DesktopWindow.ts:363`（comparison）；`apps/server/src/scheduledTasks/webhookFilter.ts:22`（switch-case）；`apps/web/src/components/settings/ScheduledTasksSettings.tsx:279`（comparison）；`apps/web/src/composer-code-block.ts:21`（ts-type）；`apps/web/src/composer-code-block.ts:23`（comparison）；`apps/web/src/composer-code-block.ts:122`（ts-type）；`apps/web/src/composer-code-block.ts:132`（comparison）；…（共 18 处）

### `left`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/usage/UsageLimitsPooled.tsx:554`（A，PoolWindowCard）
- 同一文本作为值用途字面量出现 175 次：`apps/desktop/src/preview/PickPreload.ts:883`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1239`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1243`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1254`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1281`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1282`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1284`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1288`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1292`（object-key）；`apps/desktop/src/preview/PickPreload.ts:1318`（object-key）；…（共 175 处）

### `lines`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/LargeTextViewer.tsx:220`（A，LargeTextViewer）
- 同一文本作为值用途字面量出现 17 次：`apps/server/src/orchestration-v2/Adapters/ClaudeAdapterV2.ts:3363`（object-key）；`apps/server/src/orchestration-v2/workflowAgentTranscript.ts:82`（object-key）；`apps/server/src/provider/providerMaintenanceRunner.ts:213`（object-key）；`apps/server/src/provider/providerMaintenanceRunner.ts:215`（object-key）；`apps/web/src/components/chat/WorktreeSetupCard.tsx:227`（object-key）；`apps/web/src/components/chat/WorktreeSetupCard.tsx:227`（object-key）；`apps/web/src/components/files/office/slide-fonts.ts:116`（object-key）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:484`（object-key）；`apps/web/src/components/mcp/UseInAnotherAppDialog.tsx:488`（object-key）；`apps/web/src/lib/diffRendering.ts:109`（object-key）；…（共 17 处）

### `minutes`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ScheduledTasksSettings.tsx:2111`（A，ScheduledTaskEditorForm）
- 同一文本作为值用途字面量出现 30 次：`apps/server/src/cli/trace.ts:96`（object-key）；`apps/server/src/cloud/CloudLink.ts:595`（object-key）；`apps/server/src/cloud/CloudLink.ts:1484`（object-key）；`apps/server/src/orchestration-v2/PullRequestWatchReactor.ts:241`（object-key）；`apps/server/src/orchestration-v2/RunExecutionService.ts:1646`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:21`（object-key）；`apps/server/src/orchestration-v2/pullRequestWatch.ts:105`（object-key）；`apps/server/src/relay/AgentAwarenessRelay.ts:266`（object-key）；`apps/web/src/components/CustomSnoozeDialog.tsx:77`（ts-type）；`apps/web/src/components/CustomSnoozeDialog.tsx:202`（object-key）；…（共 30 处）

### `none`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:1741`（A，GitActionsControl）
- 同一文本作为值用途字面量出现 165 次：`apps/desktop/src/electron/ElectronDialog.ts:42`（schema-literal）；`apps/desktop/src/preview/FaviconCapture.ts:37`（ts-type）；`apps/desktop/src/preview/Manager.ts:116`（ts-type）；`apps/desktop/src/preview/PickPreload.ts:81`（comparison）；`apps/desktop/src/preview/PickPreload.ts:101`（comparison）；`apps/desktop/src/preview/PickPreload.ts:1307`（comparison）；`apps/desktop/src/preview/PickPreload.ts:1574`（comparison）；`apps/desktop/src/preview/PickPreload.ts:1647`（comparison）；`apps/desktop/src/preview/RecordingCursor.ts:65`（ts-type）；`apps/server/src/auth/mcpOAuthHttp.ts:82`（as-const）；…（共 165 处）

### `optionId`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/CustomModelEditor.tsx:218`（B，renderDescriptor）
- 同一文本作为值用途字面量出现 19 次：`apps/server/src/provider/acp/AntigravityProtocol.ts:160`（object-key）；`apps/server/src/provider/acp/AntigravityProtocol.ts:164`（object-key）；`apps/web/src/components/chat/ComposerCommandMenu.tsx:189`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3123`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3133`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3152`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:3158`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:9046`（object-key）；`packages/effect-acp/src/_generated/schema-v1.gen.ts:9050`（object-key）；`packages/effect-acp/src/_generated/schema.gen.ts:3184`（object-key）；…（共 19 处）

### `or`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/KeybindingsSettings.tsx:506`（A，WhenExpressionNodeEditor）
- 同一文本作为值用途字面量出现 13 次：`apps/server/src/keybindings.ts:166`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:101`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.logic.ts:328`（switch-case）；`apps/web/src/components/settings/KeybindingsSettings.tsx:146`（ts-type）；`apps/web/src/components/settings/KeybindingsSettings.tsx:430`（comparison）；`apps/web/src/components/settings/KeybindingsSettings.tsx:506`（never-attribute）；`apps/web/src/keybindings.ts:84`（switch-case）；`packages/client-runtime/src/work-log/commandLabel.ts:125`（membership）；`packages/client-runtime/src/work-log/commandLabel.ts:186`（membership）；`packages/contracts/src/keybindings.ts:189`（schema-literal）；…（共 13 处）

### `origin`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/GitActionsControl.tsx:788`（B，PublishRepositoryDialog）
- 同一文本作为值用途字面量出现 154 次：`apps/desktop/src/electron/ElectronProtocol.ts:179`（comparison）；`apps/desktop/src/preview/BrowserSession.ts:69`（object-key）；`apps/desktop/src/preview/PasskeyBackend.ts:5`（object-key）；`apps/desktop/src/preview/Passkeys.ts:182`（object-key）；`apps/server/src/cli/pair.ts:190`（object-key）；`apps/server/src/cli/pair.ts:561`（object-key）；`apps/server/src/cli/project.ts:364`（object-key）；`apps/server/src/cli/project.ts:374`（object-key）；`apps/server/src/cli/project.ts:385`（object-key）；`apps/server/src/cli/project.ts:388`（object-key）；…（共 154 处）

### `outdated`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewAnnotation.tsx:250`（A，ReviewThreadCard）
- 同一文本作为值用途字面量出现 5 次：`packages/client-runtime/src/connection/diagnosis.ts:52`（ts-type）；`packages/client-runtime/src/connection/diagnosis.ts:104`（switch-case）；`packages/client-runtime/src/connection/diagnosis.ts:166`（switch-case）；`packages/client-runtime/src/connection/diagnosis.ts:241`（switch-case）；`packages/source-control-bitbucket/src/server/bitbucketPullRequestJson.ts:103`（object-key）

### `override`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/settingsLayout.tsx:399`（B，SettingsRow）
- 同一文本作为值用途字面量出现 4 次：`apps/server/src/provider/AntigravityInstallation.ts:81`（ts-type）；`apps/server/src/provider/AntigravityInstallation.ts:260`（ts-type）；`packages/contracts/src/relayClient.ts:7`（schema-literal）；`packages/shared/src/relayClient.ts:38`（ts-type）

### `process`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:270`（A，AggregateCard）
- 同一文本作为值用途字面量出现 67 次：`apps/desktop/src/wsl/DesktopWslEnvironment.ts:144`（ts-type）；`apps/desktop/src/wsl/DesktopWslEnvironment.ts:163`（switch-case）；`apps/server/src/resourceTelemetry/Model.ts:17`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:567`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetryHistory.ts:44`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetryHistory.ts:268`（object-key）；`apps/server/src/serviceLauncher.ts:48`（object-key）；`apps/server/src/serviceLauncher.ts:614`（object-key）；`apps/server/src/sourceControl/ServerSourceControlHost.ts:38`（object-key）；`apps/server/src/sourceControl/SourceControlProviderRegistry.ts:246`（object-key）；…（共 67 处）

### `processes`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ResourceTelemetryDiagnostics.tsx:270`（A，AggregateCard）
- 同一文本作为值用途字面量出现 20 次：`apps/server/src/diagnostics/ProcessDiagnostics.ts:84`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:60`（object-key）；`apps/server/src/resourceTelemetry/Model.ts:602`（object-key）；`apps/server/src/resourceTelemetry/NativeTelemetryClient.ts:680`（object-key）；`apps/server/src/resourceTelemetry/NativeTelemetryClient.ts:854`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetry.ts:183`（object-key）；`apps/server/src/resourceTelemetry/ResourceTelemetry.ts:296`（object-key）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:311`（object-key）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:317`（object-key）；`apps/web/src/components/settings/DiagnosticsSettings.tsx:553`（object-key）；…（共 20 处）

### `retrying`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ConnectionDiagnosisDetails.tsx:73`（A，RetryCountdownTicker）
- 同一文本作为值用途字面量出现 6 次：`apps/web/src/components/onboarding/FirstRunGate.tsx:98`（comparison）；`apps/web/src/components/onboarding/FirstRunGate.tsx:172`（comparison）；`apps/web/src/components/onboarding/FirstRunGate.tsx:185`（object-key）；`apps/web/src/components/onboarding/FirstRunGate.tsx:188`（object-key）；`apps/web/src/hooks/useSettings.ts:71`（ts-type）；`apps/web/src/hooks/useSettings.ts:142`（comparison）

### `root`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/AddEnvironmentDialog.tsx:572`（B，renderSshFields）
- 同一文本作为值用途字面量出现 130 次：`apps/desktop/src/snapShot/SnapShotAccessibility.ts:46`（ts-type）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:74`（object-key）；`apps/desktop/src/snapShot/SnapShotAccessibility.ts:88`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:302`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:338`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:357`（object-key）；`apps/desktop/src/snapShot/snapShot.ts:437`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:14`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:172`（object-key）；`apps/desktop/src/wsl/DesktopWslServerTree.ts:176`（object-key）；…（共 130 处）

### `rows`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/files/LargeTextViewer.tsx:220`（A，LargeTextViewer）
- 同一文本作为值用途字面量出现 160 次：`apps/desktop/src/preview/BrowserImport/ChromiumCookies.ts:196`（object-key）；`apps/desktop/src/preview/BrowserImport/FirefoxCookies.ts:70`（object-key）；`apps/desktop/src/preview/BrowserImport/FirefoxCookies.ts:90`（object-key）；`apps/server/src/orchestration-v2/ProjectionStore.ts:7100`（object-key）；`apps/server/src/orchestration-v2/ProjectionStore.ts:7120`（object-key）；`apps/server/src/provider/acp/AntigravityChildWork.ts:245`（condition）；`apps/server/src/terminal/Manager.ts:266`（object-key）；`apps/server/src/terminal/Manager.ts:280`（object-key）；`apps/server/src/terminal/Manager.ts:301`（object-key）；`apps/server/src/terminal/Manager.ts:314`（object-key）；…（共 160 处）

### `server`（B，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ConnectionsSettings.tsx:1205`（B，ConnectionsSettingsContent）
- 同一文本作为值用途字面量出现 272 次：`apps/desktop/src/app/DesktopAppActivation.ts:206`（object-key）；`apps/desktop/src/app/DesktopAppActivation.ts:219`（object-key）；`apps/desktop/src/app/DesktopAppActivation.ts:238`（object-key）；`apps/server/src/cli/triage.ts:139`（object-key）；`apps/server/src/diagnostics/ProcessResourceMonitor.ts:24`（comparison）；`apps/server/src/diagnostics/ProcessResourceMonitor.ts:45`（comparison）；`apps/server/src/htmlRender/publicProxy.ts:132`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:210`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:213`（object-key）；`apps/server/src/htmlRender/publicProxy.ts:219`（object-key）；…（共 272 处）

### `setup`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/ProjectActionsList.tsx:38`（A，ProjectActionsList）
- 同一文本作为值用途字面量出现 16 次：`apps/desktop/src/snapShot/DesktopSnapShot.ts:196`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1612`（object-key）；`apps/server/src/project/ProjectSetupScriptRunner.ts:68`（ts-type）；`apps/server/src/provider/AntigravityProvider.ts:204`（object-key）；`apps/server/src/provider/Drivers/CodexManagedProvider.ts:68`（object-key）；`apps/server/src/provider/Drivers/CodexManagedProvider.ts:173`（object-key）；`apps/server/src/provider/unavailableProviderSnapshot.ts:29`（object-key）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:676`（object-key）；`apps/web/src/components/settings/ProviderInstanceCard.tsx:723`（object-key）；`apps/web/src/components/settings/ProviderWizardAuthenticationStep.tsx:49`（object-key）；…（共 16 处）

### `stack`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/ThreadStatusIndicators.tsx:355`（A，ThreadPullRequestsMiniList）
- 同一文本作为值用途字面量出现 80 次：`apps/desktop/src/preview/PickPreload.ts:440`（object-key）；`apps/desktop/src/preview/PickPreload.ts:451`（object-key）；`apps/desktop/src/preview/PickedElementPayload.ts:34`（computed-key）；`apps/desktop/src/preview/PickedElementPayload.ts:35`（computed-key）；`apps/server/src/git/detachStackFrame.ts:9`（object-key）；`apps/server/src/mcp/toolkits/pullRequests/handlers.ts:124`（ts-type）；`apps/server/src/mcp/toolkits/pullRequests/handlers.ts:145`（object-key）；`apps/server/src/mcp/toolkits/pullRequests/tools.ts:271`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:752`（object-key）；`apps/server/src/orchestration-v2/Orchestrator.ts:4010`（comparison）；…（共 80 处）

### `team`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestReviewerPicker.tsx:144`（A，PullRequestReviewerPicker）
- 同一文本作为值用途字面量出现 6 次：`apps/server/src/provider/ClaudeProvider.ts:119`（switch-case）；`apps/server/src/provider/CodexProvider.ts:149`（switch-case）；`apps/web/src/components/pullRequest/PullRequestReviewerPicker.tsx:143`（comparison）；`packages/contracts/src/pullRequest.ts:191`（schema-literal）；`packages/provider-cursor/src/server/adapter.ts:291`（as-const）；`packages/source-control-github/src/server/gitHubPullRequestJson.ts:1573`（comparison）

### `unavailable`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/device/DeviceHostAvailability.tsx:17`（A，DeviceHostAvailability）
- 同一文本作为值用途字面量出现 143 次：`apps/desktop/src/backend/DesktopServerExposure.ts:309`（object-key）；`apps/desktop/src/backend/DesktopServerExposure.ts:409`（object-key）；`apps/desktop/src/preview/BrowserImport/BrowserImport.ts:228`（object-key）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:915`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1064`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1143`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1154`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1157`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1187`（comparison）；`apps/desktop/src/snapShot/DesktopSnapShot.ts:1194`（comparison）；…（共 143 处）

### `via`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/settings/VoiceSettingsPanel.tsx:1343`（A，VoiceSettingsPanel）
- 同一文本作为值用途字面量出现 16 次：`apps/web/src/components/settings/ConnectionDiagnosisDetails.tsx:44`（object-key）；`packages/client-runtime/src/connection/diagnosis.ts:37`（object-key）；`packages/client-runtime/src/connection/errors.ts:112`（object-key）；`packages/client-runtime/src/connection/errors.ts:197`（object-key）；`packages/client-runtime/src/connection/errors.ts:206`（object-key）；`packages/client-runtime/src/connection/errors.ts:214`（object-key）；`packages/client-runtime/src/connection/errors.ts:222`（object-key）；`packages/client-runtime/src/connection/errors.ts:229`（object-key）；`packages/client-runtime/src/connection/errors.ts:236`（object-key）；`packages/client-runtime/src/connection/errors.ts:244`（object-key）；…（共 16 处）

### `viewed`（A，message，1 处）

- 显示位置（照常转换）：`apps/web/src/components/pullRequest/PullRequestCodeTab.tsx:1162`（A，PullRequestCodeTab）
- 同一文本作为值用途字面量出现 16 次：`apps/server/src/persistence/PullRequestFilesViewed.ts:34`（object-key）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:212`（as-const）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:218`（as-const）；`apps/server/src/pullRequest/pullRequestViewedFiles.ts:283`（object-key）；`apps/web/src/components/pullRequest/filesViewedStore.ts:30`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:15`（comparison）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:50`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:54`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:63`（object-key）；`apps/web/src/components/pullRequest/pullRequestFilesViewed.logic.ts:64`（object-key）；…（共 16 处）
