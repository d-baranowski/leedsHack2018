import boto3
import uuid
import json
from http import HTTPStatus


client = boto3.client('dynamodb', region_name='eu-west-2')

def lambda_handler(event, context):
    
    body = json.loads(event['body'])
    print(body)
    
    textPattern = body['textPattern']
    replacementTexts = body['replacementTexts']
    
    try:
        response = client.put_item(
            TableName = 'Replacements',
            Item = {
                'replacementId': { 'S': str(uuid.uuid4()) },
                'textPattern': { 'S': textPattern },
                'replacementTexts': { 'SS': replacementTexts }
            }
        )
    except Exception as error:
        print(error)
        return {
            'statusCode': HTTPStatus.BAD_GATEWAY,
            'body': json.dumps(error)
        }
    
    print(response)
    
    return {
        'statusCode': HTTPStatus.OK
    }
