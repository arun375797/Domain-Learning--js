/**
 * Custom Errors
 * 
 * WHAT TO LEARN:
 * 
 * 1. EXTENDING ERROR
 *    - class CustomError extends Error { }
 *    - Creates custom error type
 *    - Better error handling
 *    - More specific errors
 * 
 * 2. BASIC CUSTOM ERROR
 *    - class ValidationError extends Error {
 *        constructor(message) {
 *          super(message);
 *          this.name = 'ValidationError';
 *        }
 *      }
 * 
 * 3. INSTANCEOF CHECKING
 *    - error instanceof ValidationError
 *    - Type-specific handling
 *    - Different actions per type
 * 
 * 4. ERROR PROPERTIES
 *    - this.name - error type name
 *    - this.message - error message
 *    - this.stack - stack trace
 *    - Can add custom properties
 * 
 * 5. CUSTOM PROPERTIES
 *    - class ValidationError extends Error {
 *        constructor(message, field) {
 *          super(message);
 *          this.field = field;
 *        }
 *      }
 *    - Additional context
 * 
 * 6. ERROR HIERARCHY
 *    - class ValidationError extends Error { }
 *    - class RequiredFieldError extends ValidationError { }
 *    - Nested error types
 *    - instanceof checks parent too
 * 
 * 7. WHEN TO USE
 *    - Specific error types
 *    - Better error messages
 *    - Error handling logic
 *    - API error responses
 * 
 * 8. ERROR CODES
 *    - class ApiError extends Error {
 *        constructor(message, code) {
 *          super(message);
 *          this.code = code;
 *        }
 *      }
 *    - Numeric error codes
 * 
 * 9. ERROR FACTORIES
 *    - function createValidationError(message) {
 *        return new ValidationError(message);
 *      }
 *    - Convenience functions
 * 
 * 10. STACK TRACE
 *     - Preserved by default
 *     - Shows where error occurred
 *     - Useful for debugging
 * 
 * 11. BEST PRACTICES
 *     - Name clearly describes error
 *     - Include useful properties
 *     - Use for specific cases
 *     - Document error types
 * 
 * 12. COMMON ERROR TYPES
 *     - ValidationError
 *     - NotFoundError
 *     - AuthenticationError
 *     - AuthorizationError
 *     - NetworkError
 */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function assertEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email must include @");
  }
}

try {
  assertEmail("invalid-email");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation issue:", error.message);
  } else {
    throw error;
  }
}
