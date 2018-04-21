import boto3
import json
from http import HTTPStatus


client = boto3.client('dynamodb', region_name='eu-west-2')

def lambda_handler(event, context):
    result = client.scan(
        TableName='Replacements'
    )
    
    item_count = result['Count']
    if item_count > 0:
        
        replacements = []
        
        for item in result['Items']:
            replacementId = item['replacementId']['S']
            textPattern = item['textPattern']['S']
            replacementTexts = item['replacementTexts']['SS']
            
            response_body = {
                'replacementId': replacementId,
                'textPattern': textPattern,
                'replacementTexts': replacementTexts
            }
            
            replacements.append(response_body)
            
        return {
            'statusCode': HTTPStatus.OK,
            'body': json.dumps(replacements)
        }

    return {
        'statusCode': HTTPStatus.OK,
        'body': json.dumps([])
    }
    
