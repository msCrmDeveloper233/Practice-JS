function onCaseTypeChange(executionContext) {
  try {
    var formContext = executionContext.getFormContext(); // Get the form context
    var caseType = formContext.getAttribute("casetypecode").getValue(); // Get the value of Case Type

    var complaintSection = formContext.ui.tabs
      .get("General")
      .sections.get("ComplaintSection"); // Get the section reference

    if (caseType === 100000001) {
      // Assuming 100000001 is 'Complaint'
      complaintSection.setVisible(true); // Show Complaint Section
    } else {
      complaintSection.setVisible(false); // Hide Complaint Section
    }
  } catch (error) {
    console.error("Error in onCaseTypeChange:", error.message);
  }
}
